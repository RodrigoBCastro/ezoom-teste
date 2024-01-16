import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function TaskForm() {
    const navigate = useNavigate();
    let {id} = useParams();
    const [task, setTask] = useState({
        id: null,
        title: '',
        description: '',
        status: '',
    })
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const {setNotification} = useStateContext()

    if (id) {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/tasks/${id}`)
                .then(({data}) => {
                    setLoading(false)
                    setTask(data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, [])
    }

    const onSubmit = ev => {
        ev.preventDefault()
        if (task.id) {
            axiosClient.put(`/tasks/${task.id}`, task)
                .then(() => {
                    setNotification('Task was successfully updated')
                    navigate('/tasks')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        } else {
            axiosClient.post('/tasks', task)
                .then(() => {
                    setNotification('Task was successfully created')
                    navigate('/tasks')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        }
    }

    return (
        <>
            {task.id && <h1>Update Task: {task.title}</h1>}
            {!task.id && <h1>New Task</h1>}
            <div className="card animated fadeInDown">
                {loading && (
                    <div className="text-center">
                        Loading...
                    </div>
                )}
                {errors &&
                    <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                }
                {!loading && (
                    <form onSubmit={onSubmit}>
                        <input value={task.title} onChange={ev => setTask({...task, title: ev.target.value})}
                               placeholder="Title"/>
                        <input value={task.description}
                               onChange={ev => setTask({...task, description: ev.target.value})}
                               placeholder="Description"/>
                        <select value={task.status} onChange={ev => setTask({...task, status: ev.target.value})}>
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <button className="btn">Save</button>
                    </form>
                )}
            </div>
        </>
    )
}
