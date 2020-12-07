import React from 'react';

export const Sec4 = () => {
    return (
        <div className='shadow-sm page bgdark'>
            <div className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-6 ml-4'>
                    <h3>Contacto</h3>
                    <p>
                        Estamos a su entera disposición para lo que necesite.
                        Puede contactarnos a través de nuestros números de
                        teléfono, así como también WhatsApp o Telegram.
                        Escribanos sin dudar para aclarar cualquier duda, además
                        para consultar stock y descuentos aplicables. Estamos
                        aquí para servirle.
                    </p>
                </div>
                <div className='cajatexto col-md-5 m-5 p-0'>
                    <div className='flexbox'>
                        <img
                            className='iconsvg'
                            src='./assets/img/clock.svg'
                        ></img>
                        <p>8:00 - 18:00</p>
                    </div>
                    <div className='flexbox'>
                        <img
                            className='iconsvg'
                            src='./assets/img/calend.svg'
                        ></img>
                        <p>Lunes a Viernes</p>
                    </div>
                    <div className='flexbox'>
                        <img
                            className='icon'
                            src='./assets/img/whatsapp.png'
                        ></img>
                        <p> 586 32 56 85</p>
                    </div>
                    <div
                        id='map-container'
                        className='rounded z-depth-1-half map-container pt-3'
                        style={{ height: '400px' }}
                    >
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.007354707959!2d-78.48369419382932!3d-0.12118897820809817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58564e791d3c1%3A0x69330696bc4df66!2sTalleres%20Emerson%20Ford!5e0!3m2!1ses!2ses!4v1607316398303!5m2!1ses!2ses'
                            width='600'
                            height='450'
                            frameborder='0'
                            allowfullscreen=''
                            aria-hidden='false'
                            tabindex='0'
                        />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .cajatexto p {
                        text-align: left;
                    }
                    .iconsvg {
                        width: 25px;
                    }
                `}
            </style>
        </div>
    );
};
