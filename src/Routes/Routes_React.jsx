 // eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRoutes } from 'react-router-dom'

// Views 
import HomeView from "../Views/HomeView" 
import ExcersiseView from "../Views/ExerciseView" 
import ProfileView from "../Views/ProfileView.jsx" 
import Review from "../Views/Review" 
import SesionView from "../Views/SesionView" 
import SingupView from '../Views/SingupView'
import SinginView from '../Views/SinginView';

// eslint-disable-next-line no-unused-vars
const Routes_React = () => {
    const routes = useRoutes([
        {path : '/', element:<HomeView />},
        {path : '/ExerciseView', element: <ExcersiseView />},
        {path : '/ProfileView', element:<ProfileView />},
        {path : '/Review', element:<Review />},
        {path : '/SesionView', element:<SesionView />},
        {path : '/SinginView', element:<SinginView />},
        {path : '/SingupView', element:<SingupView />},
    ])
    return routes
}

export default Routes_React;
