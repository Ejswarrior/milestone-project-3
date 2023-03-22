import {Schema, model, models} from 'mongoose';

const boardSchema = new Schema({
        title: { type: String, required: true},
        // tasks: [{type: Schema.Types.ObjectId, ref:'Tasks'}],
})

const Boards = models.boards || model('boards', boardSchema);

export default Boards;