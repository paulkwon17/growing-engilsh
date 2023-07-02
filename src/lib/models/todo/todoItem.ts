import mongoose, { models } from 'mongoose';

const TodoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

const TodoItemModel = models?.TodoItem || mongoose.model('TodoItem', TodoItemSchema);

export default TodoItemModel;
