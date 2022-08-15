import { useSelector } from "react-redux"
import {useDispatch} from 'react-redux'
import { deleteTask } from "../feactures/tasks/taskSlice"
import {Link} from 'react-router-dom'
const TasksList = () => {
  const tasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Tareas {tasks.length}</h1>
        <Link to="/agregarTarea">Agregar</Link>
      </header>


      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={ () => handleDelete(task.id)}>Eliminar</button>
        </div>
      ))}

    </div>
  )
}
export default TasksList