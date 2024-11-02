import Layout from '../layout/Layout';
import {createBrowserRouter } from "react-router-dom";
import HomeScreen from '../screen/BotScreen';
import BotScreen from '../screen/BotScreen';
import GoalLayout from '../layout/GoalLayout';

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: "/chat",
        element: <BotScreen />
    },
    {
        path: "/goal",
        element: <GoalLayout />
    }
]);
