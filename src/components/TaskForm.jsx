import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addTask} from '../feactures/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'

const initialStateForm = {
  title: '',
  description: ''
}

const TaskForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [form, setForm] = useState(initialStateForm)
  
  
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTask({...form, id: uuid()}))
    setForm(initialStateForm)
    navigate("/")
  }

  
  return (
    <form 
      action=""
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        name="title" 
        placeholder="Título" 
        onChange={handleChange}
      />
      
      <textarea 
        name="description" 
        placeholder="Descripción"
        onChange={handleChange}
      ></textarea>

      <input type="submit" value="Agregar" />
    </form>
  )
}
export default TaskForm