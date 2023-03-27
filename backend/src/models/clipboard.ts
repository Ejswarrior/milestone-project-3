import {Schema, model, Types} from 'mongoose';
import Tasks from './tasks.js';

interface clipboards {
        title: string;
        tasks: Types.ObjectId
}

const clipBoardSchema = new Schema<clipboards>({
        title: { type: String, required: true},
        tasks: [{type: Schema.Types.ObjectId, ref:'tasks'}],
})

const Clipboard = model<clipboards>('clipboards', clipBoardSchema);

export default Clipboard;