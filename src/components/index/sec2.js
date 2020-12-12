import React from 'react';

export const Sec2 = () => {
    return (
        <div className='shadow-sm page bgdark2'>
            <div className='row m-0 p-0 pb-5'>
                <div className='col-md-5 pt-5'>
                    <img
                        alt='Filtro de aceite'
                        className='w-100'
                        src='./assets/img/filter.png'
                    />
                </div>
                <div className='cajatexto col-md-6 ml-md-4'>
                    <h2>Garantía</h2>
                    <p>
                        Nuestros precios competitivos nos hace únicos, nos
                        caracteriza la calidad de nuestros productos, trabajamos
                        con las mejores marcas pudiendo garantizarlas para la
                        satisfacción y tranquilidad de los clientes, porque tú
                        eres nuestra prioridad.
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
