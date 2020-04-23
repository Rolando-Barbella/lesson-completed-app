import React from 'react';
import logo from './logo.svg';
import ProgressBar from './components/ProgressBar';
import useArray from './hooks/useArray';
import './App.css';

function App() {
  const lessons = useArray([
    { id: 1, lesson: 'State', completed: false },
    { id: 2, lesson: 'UseRef', completed: false },
    { id: 3, lesson: 'Hooks personalizados', completed: false },
    { id: 4, lesson: 'Eventos', completed: false },
    { id: 5, lesson: 'Pulir aplicación', completed: false },
  ]);

  const lessonsCompleted = lessons.data.filter(l => l.completed).length;
  const percentage = (100 * lessonsCompleted) / lessons.data.length;
  
  return (
    <div className="App">
      <div className="App-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="Title">
          Mis lecciones completadas
        </h3>
        <div className="LessonCheck">
          {
            lessons.data.map(({ lesson, id, completed }) => (
              <label key={id}>
                <input 
                  type="checkbox" 
                  onChange={() => lessons.completed(id)}
                  checked={completed}
                />
                <span/>
                {lesson}
              </label>
            ))
          }
        </div>
        <ProgressBar 
          percentage={percentage}
          style={{ width: '50%', marginTop: 15 }}
        />
        <div className="Footer">
          <span onClick={() =>  {
            lessons.setShowAllComplete(!lessons.showAllComplete);
            lessons.completeAll(lessons.showAllComplete);
          }}>
            {
              lessons.showAllComplete ? 'Completar todas' : 'Limpiar todas'
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
