import styles from './leader-board.module.scss';
import { getAllPlayers } from "../../request"
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';


export interface LeaderBoardProps {
  className?: string;
}

export const LeaderBoard = ({ className }: LeaderBoardProps) => {
  const [usersExisting, setUsersExisting] = useState([]);
  useEffect(() => {
    getAllPlayers().then((users : any) => {
      setUsersExisting(users);
    });
  }, []);
  const sortTable = (column: any) => {
    setUsersExisting((prevState) => {
      const sortedData = [...prevState];
      if (column == "nickname") {
        return sortedData
      }
      sortedData.sort((a, b) => {
        if (a[column] < b[column]) {
          return 1;
        } else if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      });
      return sortedData;
    });
  };

  const filteredProperties = (item: any) => {
    const filteredItem = { ...item };
    delete filteredItem._id;
    delete filteredItem.password;
    delete filteredItem.__v;
    return filteredItem;
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles["table"]}>
        <div className={styles["table-header"]}>
          {usersExisting.length > 0 &&
            Object.keys(filteredProperties(usersExisting[0])).map((key) => (
              <div
                key={key}
                className={styles["header__item"]}
                onClick={() => sortTable(key)}
              >
                <a
                  id={key}
                  className={styles["filter__link"]}
                  href="#"
                >
                  {key}
                </a>
              </div>
            ))}
            {usersExisting.length == 0 && (
              <h1>The data is being fetched....</h1>
            )}
        </div>
        <div className={styles["table-content"]}>
          {usersExisting.map((item: any) => (
            <div key={item._id} className={styles["table-row"]}>
              {Object.values(filteredProperties(item)).map((value: any) => (
                <div key={value} className={styles["table-data"]}>
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
