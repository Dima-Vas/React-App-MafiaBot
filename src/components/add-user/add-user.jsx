import styles from './add-user.module.scss';
import classNames from 'classnames';
import React, { useState } from "react";
import { postPlayer } from "../../request"

export interface AddUserProps {
    className?: string;
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return hashedPassword;
}

async function sendData(data) {
  data["password"] = await hashPassword(data["password"])
  postPlayer(data)
}

export const AddUser = ({ className, onClose }: AddUserProps) => {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
    });

    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (event) => {
      event.preventDefault();
      sendData(formData);
      setFormData({ nickname: "", password: ""});
      onClose();
    };

    return (
        <div className={classNames(styles.root, className)}>
          <form onSubmit = {handleSubmit} className={styles['form']}>
          <div className={styles['exit_form']}>
              <h3>Add User</h3>
              <button onClick = {onClose} className={styles['exit_form_button']}>X</button>
            </div> 
            <div>
              <input
                onChange = {(e) => setFormData({...formData, nickname: e.target.value})}
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={formData.nickname}
              />
            </div>
            <div>
              <input 
                onChange = {(e) => setFormData({...formData, password: e.target.value})}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
    );
};

export { hashPassword }