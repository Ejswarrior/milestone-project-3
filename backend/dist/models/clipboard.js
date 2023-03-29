import { Schema, model } from 'mongoose';
const clipBoardSchema = new Schema({
    title: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'tasks' }],
});
const Clipboard = model('clipboards', clipBoardSchema);
export default Clipboard;
//# sourceMappingURL=clipboard.js.map