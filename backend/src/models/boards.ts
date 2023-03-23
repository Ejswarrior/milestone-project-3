import {Schema, model, models} from 'mongoose';

interface boards {
        title: string;
}

const boardSchema = new Schema<boards>({
        title: { type: String, required: true},
        // tasks: [{type: Schema.Types.ObjectId, ref:'Tasks'}],
})

const Boards = model<boards>('boards', boardSchema);

export default Boards;