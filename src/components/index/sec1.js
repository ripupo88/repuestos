import React from 'react';

export const Sec1 = () => {
    return (
        <div className='shadow-sm'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-6 ml-4'>
                    <h1>Repuestos automotrices</h1>
                    <p>
                        Somos una empresa distribuidora de repuestos
                        automotrices ubicados en Quito, Ecuador. Nuestra mision
                        es satisfacer las necesidades de nuestros clientes y del
                        mercado; ofreciendo productos de calidad acompañado de
                        una excelente atención y servicio en compañía de un
                        recurso humano altamente comprometido en brindarle la
                        mejor experiencia
                    </p>
                    <div className='float-right'>
                        <button className='btn btn-dark'>Catalogo</button>
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
