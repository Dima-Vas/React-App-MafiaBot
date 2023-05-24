import { createBoard } from '@wixc3/react-board';
import { MafiaImage } from '../../../components/mafia-image/mafia-image';

export default createBoard({
    name: 'MafiaImage',
    Board: () => <MafiaImage />
});
