import React from 'react';

export const Sec1a = () => {
    return (
        <div className='page'>
            <div className='row m-0 p-0  pb-5 fondo'>
                <div className='col-md-12 pt-5 '>
                    <h2 className='text-center '>Nuestras Marcas</h2>
                    <div className='ml-md-5 mr-md-5'>
                        <p>
                            Como Empresa Distribuidora de Repuestos Automotrices
                            una parte importante de nuestro trabajo y compromiso
                            es la de ofrecer un producto de primera categoría,
                            por eso que solo trabajamos con las mejores marcas
                            que nos garantizan como valor principal, máxima
                            confianza, durabilidad y una relación calidad-Precio
                            de todos nuestros productos como ningún otro
                            distribuidor.{' '}
                        </p>
                    </div>
                    <div className='flexbox-center'>
                        <img
                            alt='Marca 1'
                            className='img-fluid'
                            src='./assets/img/ctr.png'
                        />
                        <img
                            alt='Marca 2'
                            className='img-fluid'
                            src='./assets/img/ranger.png'
                        />
                        <img
                            alt='Marca 3'
                            className='img-fluid'
                            src='./assets/img/lesser.jpg'
                        />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .fondo {
                        background-image: url('./assets/img/fondo1.svg');
                        background-repeat: no-repeat;
                        background-position: left top;
                        background-size: 15%;
                    }
                    .fondo1 {
                        background-image: url('./assets/img/fondo1.svg');
                        background-repeat: no-repeat;
                        background-position: right bottom;
                        background-size: 15%;
                        -ms-transform: rotate(180deg); /* IE 9 */
                        transform: rotate(180deg);
                    }
                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
