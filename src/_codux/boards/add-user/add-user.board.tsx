import { createBoard } from '@wixc3/react-board';
import { AddUser } from '../../../components/add-user/add-user';
import AddUser_module from '../../../components/add-user/add-user.module.scss';

export default createBoard({
    name: 'AddUser',
    Board: () => <AddUser className={AddUser_module.root} />,
});
