import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>    
      <div className="App">
        <Routes>
          <Route path="/vite-todo/" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
