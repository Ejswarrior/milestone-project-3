import { Schema, model } from 'mongoose';
const boardSchema = new Schema({
    title: { type: String, required: true },
    clipboards: [{ type: Schema.Types.ObjectId, ref: 'clipboards' }],
});
const Boards = model('boards', boardSchema);
export default Boards;
//# sourceMappingURL=boards.js.map