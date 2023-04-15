import mongoose, { Schema, models } from 'mongoose';

export const TodoListSchema = new Schema(
  {
    check: {
      type: Boolean,
      required: true,
    },
    sid: {
      type: String,
      required: true,
    },
    todoItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TodoItem',
      required: true,
    },
  },
  { timestamps: true },
);

const TodoList = models?.TodoList || mongoose.model('TodoList', TodoListSchema);

export default TodoList;
