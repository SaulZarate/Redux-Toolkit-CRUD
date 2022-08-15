import './App.css'
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<TasksList />} />
              <Route path="/agregarTarea" element={<TaskForm />} />
              <Route path="/editarTarea/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
