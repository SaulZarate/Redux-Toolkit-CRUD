import './App.css'
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/agregarTarea" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
