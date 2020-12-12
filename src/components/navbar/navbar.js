import React from 'react';
import './navbar.module.css';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light  shadow-sm'>
            <a href='/home' className='navbar-brand'>
                <img
                    alt='Logo de la empresa'
                    src='./rpr-logo.svg'
                    width='85'
                    alt=''
                    className='d-inline-block align-middle mr-2'
                />

                <span className='text-uppercase font-weight-bold'>
                    Repuestos Ocaña
                </span>
            </a>

            <button
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className='navbar-toggler'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                id='navbarSupportedContent'
                className='collapse navbar-collapse'
            >
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item active'>
                        <a href='#' className='nav-link'>
                            Home <span className='sr-only'>(current)</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            Nosotros
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/cat.pdf' className='nav-link'>
                            Catálogo
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
