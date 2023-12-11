import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', task: '', status: 'Not Started' });

  const addTodo = () => {
    if (newTodo.title && newTodo.task) {
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setNewTodo({ title: '', task: '', status: 'Not Started' });
    }
  };

  const updateTodoStatus = (index, newStatus) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].status = newStatus;
      return updatedTodos;
    });
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Task:</label>
        <textarea
          value={newTodo.task}
          onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Status:</label>
        <select
          value={newTodo.status}
          onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="Not Started">Not Started</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Todo
      </button>
      <TodoList todos={todos} updateTodoStatus={updateTodoStatus} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
