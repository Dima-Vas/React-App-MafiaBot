import { createBoard } from '@wixc3/react-board';
import { HomeMain } from '../../../components/home-main/home-main';

export default createBoard({
    name: 'HomeMain',
    Board: () => <HomeMain />
});
