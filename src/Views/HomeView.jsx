// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavView from './NavView';

// Styles 
import '../assets/Styles/HomeView/Home-view.css'
import '../assets/Styles/HomeView/Home-container.css'

const HomeView = () => {
    return (
        <div className='Home__view'>
            <NavView />
            <section className='Home__container'>
                <h1>Home</h1>
            </section>
        </div>
    );
}

export default HomeView;
