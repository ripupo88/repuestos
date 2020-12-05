import React from 'react';

export const Sec2 = () => {
    return (
        <div className='shadow-sm'>
            <div className='row m-0 p-0 pb-5'>
                <div className='col-md-5 pt-5'>
                    <img className='w-100' src='./assets/img/filter.png' />
                </div>
                <div className='cajatexto col-md-6 ml-4'>
                    <h2>NUESTRA GARANTIA</h2>
                    <p>
                        Nuestros precios competitivos nos hace únicos, nos
                        caracteriza la calidad de nuestros productos, trabajamos
                        con las mejores marcas pudiendo garantizalas para la
                        satisfaccion y tranquilidad de los clientes, porque tú
                        eres nuestra proridad
                    </p>
                    <div className='float-right'>
                        <a href='/cat.pdf' class='btn btn-dark'>
                            Catalogo
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
