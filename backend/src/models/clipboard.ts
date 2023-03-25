import {Schema, model, Types} from 'mongoose';

interface clipboards {
        title: string;
        tasks: Types.ObjectId
}

const clipBoardSchema = new Schema<clipboards>({
        title: { type: String, required: true},
        tasks: [{type: Schema.Types.ObjectId, ref:'Tasks'}],
})

const Clipboard = model<clipboards>('clipboards', clipBoardSchema);

export default Clipboard;