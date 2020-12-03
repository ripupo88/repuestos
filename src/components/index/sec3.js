import React from 'react';

export const Sec3 = () => {
    return (
        <div className='shadow-sm'>
            <div className='row m-0 p-0 pt-5 pb-5'>
                <div className='cajatexto col-md-6 m-0 p-0'>
                    <div className='errsweesw w-100 '>
                        <img
                            className='shadow-sm m-0 p-0 img-fluid'
                            src='./assets/img/agree.png'
                        />
                    </div>
                </div>
                <div className='cajatexto col-md-6 float-right'>
                    <h1>Trabajamos para ti</h1>
                    <p>
                        Nuestra prioridad eres tú, por eso siempre trabajamos
                        para mantener los tiempos de entrega de los pedidos lo
                        mas bajos posible, no queremos hacerte esperar.
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
