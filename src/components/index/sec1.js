import React from 'react';

export const Sec1 = () => {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-6 ml-4'>
                    <h1>REPUESTOS AUTOMOTRICES</h1>
                    <p>
                        Somos una empresa distribuidora de repuestos
                        automotrices ubicados en el Norte de Quito, Ecuador.
                        Nuestra misión es satisfacer las necesidades de nuestros
                        clientes y del mercado; ofreciendo productos de una alta
                        calidad, acompañado de una excelente atención y servicio
                        en compañía de un recurso humano altamente capacitado
                        comprometido en brindarle la mejor experiencia
                    </p>
                    <div className='float-right'>
                        <a href='/cat.pdf' class='btn btn-dark'>
                            Catálogo
                        </a>
                    </div>
                </div>

                <div className='col-md-5 pt-5'>
                    <img className='w-100' src='./assets/img/cars.jpg' />
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
