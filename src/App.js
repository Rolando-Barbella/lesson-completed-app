import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';

function App() {
  const lessonsList = [
    { id: 1, lesson: 'State', completed: false },
    { id: 2, lesson: 'UseRef', completed: false },
    { id: 3, lesson: 'Hooks personalizados', completed: false },
    { id: 4, lesson: 'Eventos', completed: false },
    { id: 5, lesson: 'Pulir aplicación', completed: false },
  ];

  const [lessons, setCompleted] = useState(lessonsList);

  const onCompleted = (id, completed) => {
    const updatedList = lessons.map(lesson => {
      if(lesson.id === id) {
        lesson.completed = !completed;
      }
      return lesson
    });
    return setCompleted(updatedList)
  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="Title">
          Mis lecciones completadas
        </h3>
        <div className="LessonCheck">
          {
            lessons.map(({lesson, id, completed}) => (
              <label key={id}>
                <input 
                  type="checkbox" 
                  onChange={() => onCompleted(id, completed)}
                />
                <span/>
                {lesson}
              </label>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
