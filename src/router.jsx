import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./views/Home.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Tasks from "./views/Tasks.jsx";
import TaskForm from "./views/TaskForm.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/tasks',
                element: <Tasks/>
            },
            {
                path: '/tasks/new',
                element: <TaskForm key="userCreate"/>
            },
            {
                path: '/tasks/:id',
                element: <TaskForm key="userUpdate"/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;
