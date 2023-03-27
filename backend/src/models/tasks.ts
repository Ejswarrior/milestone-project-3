import {Schema, model, Types} from 'mongoose';

export interface tasks {
    assignee: string;
    title: string;
    dueDate: Date;
    comments: Types.ObjectId;
}

const tasksSchema = new Schema<tasks>({
        title: { type: String, required: true},
        assignee: {type: String},
        dueDate: {type: Date},
        // comments: [{type: Schema.Types.ObjectId, ref:'Tasks'}],
})

const Tasks = model<tasks>('tasks', tasksSchema);

export default Tasks;