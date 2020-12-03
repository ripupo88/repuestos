import React from 'react';

export const Sec2 = () => {
    return (
        <div className='shadow-sm'>
            <div className='row m-0 p-0 pb-5'>
                <div className='col-md-5 pt-5'>
                    <img className='w-100' src='./assets/img/filter.png' />
                </div>
                <div className='cajatexto col-md-6 ml-4'>
                    <h2>Nuestra garantia</h2>
                    <p>
                        Nuestros precios competitivos no son sinonimo de mala
                        calidad, al contrario, nos caracteriza la excelencia en
                        la calidad de nuestros productos porque trabajamos
                        siempre con primeras marcas, gracias a esto podemos
                        garantizar nuestros productos para que te puedas sentir
                        tranquilo
                    </p>
                    <div className='float-right'>
                        <button className='btn btn-dark'>Catalogo</button>
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
