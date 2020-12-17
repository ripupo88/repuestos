import React from 'react';

export const Sec1 = () => {
    return (
        <div className='page fondo bgblue'>
            <div className='row m-0 p-0'>
                <div className='cajatexto col-md-5 ml-md-4'>
                    <h1>Repuestos Automotrices</h1>
                    <p>
                        Somos una empresa distribuidora de repuestos
                        automotrices ubicados en el Norte de Quito, Ecuador.
                        Nuestra misión es satisfacer las necesidades de nuestros
                        clientes y del mercado; ofreciendo productos de una alta
                        calidad, acompañado de una excelente atención y servicio
                        en compañía de un recurso humano altamente capacitado,
                        comprometido en brindarle la mejor experiencia
                    </p>
                    <div className='float-right mb-5'>
                        <a href='/cat.pdf' className='btn btn-dark'>
                            Ver Catálogo
                        </a>
                    </div>
                </div>

                <div className='col-md-6 mb-5'>
                    <img
                        width='650'
                        alt='Car parts'
                        className='w-100'
                        src='./assets/img/cars.jpg'
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .fondo {
                        background-image: url('./assets/img/fondo2.svg');
                        background-repeat: no-repeat;
                        background-position: right bottom;
                        background-size: 7%;
                    }
                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
