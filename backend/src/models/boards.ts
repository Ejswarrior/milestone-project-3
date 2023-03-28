import {Schema, model, models, Types} from 'mongoose';
import Clipboard from './clipboard.js';

interface boards {
        title: string;
        clipboards: Types.ObjectId
}

const boardSchema = new Schema<boards>({
        title: { type: String, required: true},
        clipboards: [{type: Schema.Types.ObjectId, ref:'clipboards'}],
})

const Boards = model<boards>('boards', boardSchema);

export default Boards;