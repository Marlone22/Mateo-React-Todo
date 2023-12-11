
const TodoList = ({ todos, updateTodoStatus, deleteTodo }) => {
  return (
    <ul className="mt-4 space-y-4">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded-md shadow-md flex flex-col space-y-2"
        >
          <strong className="text-lg font-semibold">{todo.title}</strong>
          <p className="text-gray-700">{todo.task}</p>
          <p className={`text-${getStatusColor(todo.status)}`}>Status: {todo.status}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => updateTodoStatus(index, 'Ongoing')}
              className="bg-yellow-500 text-white p-2 rounded"
            >
              Start
            </button>
            <button
              onClick={() => updateTodoStatus(index, 'Complete')}
              className="bg-green-500 text-white p-2 rounded"
            >
              Complete
            </button>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Not Started':
      return 'gray-700';
    case 'Ongoing':
      return 'yellow-500';
    case 'Complete':
      return 'green-500';
    default:
      return 'gray-700';
  }
};

export default TodoList;
