import React from 'react';
import { 
    Nav, 
    NavItem 
} from 'reactstrap';
import { Link } from 'react-router-dom';

//Styles 

import '../assets/Styles/NavView/Nav-view.css'
import '../assets/Styles/NavView/Nav-logo.css'
import '../assets/Styles/NavView/Nav-item.css'
import '../assets/Styles/NavView/Nav-link.css'

//Recurses

import tigerSvg from '../assets/img/Nav/Tiger.svg'

const NavView = () => {
    return (
        <Nav className='Nav__view' vertical>
            <img className='Nav__logo' src = { tigerSvg }/>
            <NavItem className='Nav__item'>
                <Link className='Nav__link' to={'/'}>HOME</Link>
            </NavItem>
            <NavItem className='Nav__item'>
                <Link className='Nav__link' to={'/ProfileView'}>PROFILE</Link>
            </NavItem>
            <NavItem className='Nav__item'>
                <Link className='Nav__link' to={'/ExerciseView'}>EXERCISE</Link>
            </NavItem>
            <NavItem className='Nav__item'>
                <Link className='Nav__link' to={'/Review'}>REVIEW</Link>
            </NavItem>
        </Nav>
    );
}

export default NavView;
