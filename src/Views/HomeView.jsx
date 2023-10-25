// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavView from './NavView';

//Recources

import imgHome from '../assets/img/Home/image-home-2.png'

// Styles 
import '../assets/Styles/HomeView/Home-view.css'
import '../assets/Styles/HomeView/Home-container.css'
import '../assets/Styles/HomeView/Home-content.css'
import '../assets/Styles/HomeView/Home-title.css'
import '../assets/Styles/HomeView/Home-img.css'
import '../assets/Styles/HomeView/Home-description.css'

const HomeView = () => {
    return (
        <div className='Home__view'>
            <NavView />
            <section className='Home__container'>
                <section className='Home__content'>
                    <h2 className='Home__title'>AI OF THE TIGER</h2>
                    <img className='Home__img' src={ imgHome } />
                </section>
                <p className='Home__description'>Ai of tiger: Tu entrenamiento con IA para el Éxito en el Fitness</p>
            </section>
        </div>
    );
}

export default HomeView;
