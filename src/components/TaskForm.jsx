import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addTask, editTask} from '../feactures/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

const initialStateForm = {
  title: '',
  description: ''
}

const TaskForm = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  
  const tasks = useSelector(state => state.tasks)

  useEffect(() => {
    if(params.id){
      setForm(tasks.find(task => task.id === params.id))

    }
  }, [])

  const [form, setForm] = useState(initialStateForm)
  
  
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask(form))
    }else{
      dispatch(addTask({...form, id: uuid()}))
      setForm(initialStateForm)
    }
    navigate("/")
  }

  
  return (
    <form 
      action=""
      onSubmit={handleSubmit}
      className="bg-zinc-800 max-w-sm p-4"
    >
      <label htmlFor="title" className="block text-xs font-bold mb-2">Tarea:</label>
      <input 
        id="title"
        type="text" 
        name="title" 
        placeholder="Título" 
        onChange={handleChange}
        value={form.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      
      <label htmlFor="description" className="block text-xs font-bold mb-2"></label>
      <textarea 
        id="description"
        name="description" 
        placeholder="Descripción"
        onChange={handleChange}
        value={form.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>

      <input 
        type="submit" 
        value="Guardar" 
        className="bg-indigo-600 px-2 py-1 rounded-sm"
      />
    </form>
  )
}
export default TaskForm