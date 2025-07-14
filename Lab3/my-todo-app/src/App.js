import { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Add a new task
  const handleAdd = () => {
    if (input.trim() === '') return;
    
    setTasks([...tasks, {
      id: Date.now(),
      text: input,
      completed: false
    }]);
    setInput('');
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>
        
        <div className="input-container">
          <input
            type="text"
            className="task-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="Enter task..."
          />
          <button 
            className="add-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="empty-state">No tasks yet. Add one above!</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li 
                key={task.id} 
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <span 
                  className="task-text"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.text}
                </span>
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(task.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;