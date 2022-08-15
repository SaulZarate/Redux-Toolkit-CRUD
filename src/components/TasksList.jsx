import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../feactures/tasks/taskSlice";
import { Link } from "react-router-dom";
const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center p-4">
        <h1>Tareas {tasks.length}</h1>
        <Link 
          to="/agregarTarea"
          className="bg-indigo-600 px-2 py-1 rounded-sm"
        >Agregar</Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button 
                  onClick={() => handleDelete(task.id)}
                  className="bg-zinc-500 px-2 py-1 text-xs rounded-md self-center"
                >Eliminar</button>
                <Link 
                  to={`/editarTarea/${task.id}`}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                >Editar</Link>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TasksList;
