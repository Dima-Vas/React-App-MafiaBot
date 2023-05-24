import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../components/login-form/login-form';

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm playerNumber={1} playerRole={"Sheriff"}/>
});
