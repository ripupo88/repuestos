import React from 'react';
import './navbar.module.css';

export const Navbar = () => {
    return (
        <nav class='navbar navbar-expand-lg navbar-light  shadow-sm'>
            <a href='#' class='navbar-brand'>
                <img
                    src='./rpr-logo.svg'
                    width='85'
                    alt=''
                    class='d-inline-block align-middle mr-2'
                />

                <span class='text-uppercase font-weight-bold'></span>
            </a>

            <button
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                class='navbar-toggler'
            >
                <span class='navbar-toggler-icon'></span>
            </button>

            <div id='navbarSupportedContent' class='collapse navbar-collapse'>
                <ul class='navbar-nav ml-auto'>
                    <li class='nav-item active'>
                        <a href='#' class='nav-link'>
                            Home <span class='sr-only'>(current)</span>
                        </a>
                    </li>
                    <li class='nav-item'>
                        <a href='#' class='nav-link'>
                            Nosotros
                        </a>
                    </li>
                    <li class='nav-item'>
                        <a href='/cat.pdf' className='nav-link'>
                            Catálogo
                        </a>
                    </li>
                    <li class='nav-item'>
                        <a href='#' class='nav-link'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
