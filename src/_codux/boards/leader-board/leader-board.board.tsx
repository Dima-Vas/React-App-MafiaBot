import { createBoard } from '@wixc3/react-board';
import { LeaderBoard } from '../../../components/leader-board/leader-board';

export default createBoard({
    name: 'LeaderBoard',
    Board: () => <LeaderBoard />
});
