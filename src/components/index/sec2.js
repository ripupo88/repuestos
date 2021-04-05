import React from 'react';
import Typewriter from 'typewriter-effect';

export const Sec2 = () => {
    return (
        <div className='shadow-sm page bgblue'>
            <div id='garan' className='row m-0 p-0 pb-5'>
                <div className='col-md-5 pt-5'>
                    <img
                        alt='Filtro de aceite'
                        className='w-100'
                        src='./assets/img/filter.webp'
                    />
                </div>
                <div className='cajatexto col-md-6 ml-md-4'>
                    <h2>
                        <Typewriter
                            options={{
                                strings: [
                                    'Nuestra Garantía',
                                    'Producto Garantizado',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p>
                        Nuestros competitivos precios nos hacen únicos, nos
                        caracterizamos por la calidad de los productos que
                        Distribuimos, estamos respaldados como Distribuidores
                        Automotrices por las mejores marcas, pudiendo otorgar
                        hasta 6 meses de garantía en todas nuestras marcas, para
                        la satisfacción y tranquilidad de nuestros clientes,
                        porque tú eres nuestra prioridad.
                    </p>
                    <div className='float-right'>
                        <a href='/cat.pdf' className='btn btn-dark'>
                            Ver Catálogo
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
