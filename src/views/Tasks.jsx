import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    useEffect(() => {
        getTasks();
    }, [])

    const onDeleteClick = user => {
        if (!window.confirm("Are you sure you want to delete this tasks?")) {
            return
        }
        axiosClient.delete(`/tasks/${user.id}`)
            .then(() => {
                setNotification('Task was successfully deleted')
                getTasks()
            })
    }

    const getTasks = () => {
        setLoading(true)
        axiosClient.get('/tasks')
            .then(({data}) => {
                setLoading(false)
                setTasks(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <h1>Tasks</h1>
                <Link className="btn-add" to="/tasks/new">Add new</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {loading &&
                        <tbody>
                        <tr>
                            <td colSpan="5" class="text-center">
                                Loading...
                            </td>
                        </tr>
                        </tbody>
                    }
                    {!loading &&
                        <tbody>
                        {tasks.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>{t.status}</td>
                                <td>
                                    <Link className="btn-edit" to={'/tasks/' + t.id}>Edit</Link>
                                    &nbsp;
                                    <button className="btn-delete" onClick={ev => onDeleteClick(t)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}
