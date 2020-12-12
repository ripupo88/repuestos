import React from 'react';

export const Sec1a = () => {
    return (
        <div className='shadow-sm page'>
            <div className='row m-0 p-0 pb-5'>
                <div className='col-md-12 pt-5'>
                    <h2 className='text-center'>Nuestras Marcas</h2>
                    <div className='ml-md-5 mr-md-5'>
                        <p>
                            Una parte importante de nuestro compromiso es
                            ofrecer un producto de primera categoría, es por eso
                            que solo trabajamos con las marcas que nos dan como
                            valor principal, máxima confianza en la calidad de
                            sus productos{' '}
                        </p>
                    </div>
                    <div className='flexbox-center'>
                        <img
                            alt='Marca 1'
                            className='img-fluid'
                            src='./assets/img/hyundai.jpg'
                        />
                        <img
                            alt='Marca 2'
                            className='img-fluid'
                            src='./assets/img/isuzu.jpg'
                        />
                        <img
                            alt='Marca 3'
                            className='img-fluid'
                            src='./assets/img/toyota.jpg'
                        />
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
