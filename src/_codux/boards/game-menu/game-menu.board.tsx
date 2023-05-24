import { createBoard } from '@wixc3/react-board';
import { GameMenu } from '../../../components/game-menu/game-menu';

export default createBoard({
    name: 'GameMenu',
    Board: () => <GameMenu />
});
