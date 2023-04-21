import {Schema, model, models, Types} from 'mongoose';

interface comment {
        comment: string;
}

const commentSchema = new Schema<comment>({
        comment: { type: String, required: true},
})

const Comment = model<comment>('users', commentSchema);

export default Comment;