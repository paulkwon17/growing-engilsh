import mongoose, { Schema, models } from 'mongoose';

export const TodoItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const TodoItem = models?.TodoItem || mongoose.model('TodoItem', TodoItemSchema);

export default TodoItem;
