import React from 'react';

export const Sec3 = () => {
    return (
        <div className='shadow-sm page bgblue'>
            <div className='row m-0 p-0 pt-5 pb-5'>
                <div className='cajatexto col-md-6 m-0 p-0'>
                    <div className='errsweesw w-100 '>
                        <img
                            alt='Trato hecho'
                            className='shadow-sm m-0 p-0 img-fluid'
                            src='./assets/img/agree.jpg'
                        />
                    </div>
                </div>
                <div className='cajatexto col-md-6 float-right'>
                    <h2>Tabajamos para ti</h2>
                    <p>
                        Nuestra prioridad eres tú, por eso nos esforzamos al
                        máximo para mantener los tiempos de entrega en el menor
                        tiempo posible, no queremos hacerte esperar.
                    </p>

                    <button className='btn btn-dark'>Hazte Cliente</button>
                </div>
                <style jsx>
                    {`
                        .num {
                            font-size: 100px;
                        }
                        .Sdeaa {
                            text-align: right;
                        }
                        .cajatexto p {
                            text-align: justify;
                        }
                        .errsweesw img {
                        }
                    `}
                </style>
            </div>
        </div>
    );
};
