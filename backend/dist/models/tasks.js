import { Schema, model } from 'mongoose';
const tasksSchema = new Schema({
    title: { type: String, required: true },
    assignee: { type: String },
    dueDate: { type: String },
    // comments: [{type: Schema.Types.ObjectId, ref:'Tasks'}],
});
const Tasks = model('tasks', tasksSchema);
export default Tasks;
//# sourceMappingURL=tasks.js.map