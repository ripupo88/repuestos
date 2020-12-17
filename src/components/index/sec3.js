import React from 'react';

export const Sec3 = () => {
    return (
        <div className='shadow-sm page bgblue '>
            <div className='row m-0 p-0 p-5 pb-5 fondofijo'>
                <div className='cajatexto col-md-6 m-0 p-0 '></div>
                <div className='cajatexto col-md-6 float-right fondotexto'>
                    <h2>Tabajamos para ti</h2>
                    <p>
                        Nuestra prioridad eres tú, por eso nos esforzamos al
                        máximo para mantener los tiempos de entrega en el menor
                        tiempo posible, no queremos hacerte esperar.
                    </p>
                </div>
                <style jsx>
                    {`
                        .fondotexto {
                            background: #ffffffbb;
                            border-radius: 15px;
                            margin-top: 60px;
                            margin-bottom: 60px;
                            padding: 20px;
                        }
                        .fondofijo {
                            height: 20%;
                            background-image: url('./assets/img/bigagree.jpg');
                            background-attachment: fixed;
                            background-size: 100%;
                            overflow: fill;
                            background-position: center center;
                            background-repeat: no-repeat;
                        }
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
