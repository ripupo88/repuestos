import React from 'react';

export const Sec4 = () => {
    return (
        <div className='shadow-sm page bgdark'>
            <div id='ContactosID' className='row m-0 p-0 pb-5'>
                <div className='cajatexto col-md-6 ml-md-4'>
                    <h3>Contacto</h3>
                    <p>
                        Estamos a su entera disposición. Puede contactarnos a
                        través de nuestros números de teléfono, así como también
                        WhatsApp o Telegram. Escríbanos sin dudar para aclarar
                        cualquier duda, además para consultar stock y descuentos
                        aplicables. Estamos para solucionar cualquier
                        requerimiento.
                    </p>
                </div>
                <div className='cajatexto col-md-5 m-5 p-0'>
                    <div className='flexbox'>
                        <img
                            alt='icono reloj'
                            className='iconsvg'
                            src='./assets/img/clock.svg'
                        ></img>
                        <p>24H</p>
                    </div>
                    <div className='flexbox'>
                        <img
                            alt='Icono calendario'
                            className='iconsvg'
                            src='./assets/img/calend.svg'
                        ></img>
                        <p>Lunes a Sábado</p>
                    </div>
                    <div className='flexbox'>
                        <img
                            alt='Icono whatsapp'
                            className='icon'
                            src='./assets/img/whatsapp.png'
                        ></img>
                        <p> 099 53 14 560</p>
                    </div>
                    <div className='flexbox'>
                        <img
                            alt='icono correo'
                            className='icon'
                            src='./assets/img/mail.svg'
                        ></img>
                        <p> ronald040982@yahoo.es</p>
                    </div>
                </div>

                <iframe
                    title='Google Maps'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4535888365045!2d-78.42372680765344!3d-0.0807760374888518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58ed0c4b58729%3A0x288de5f0a10d35b!2sConjunto%20Cibeles%202!5e0!3m2!1ses!2ses!4v1607393957216!5m2!1ses!2ses'
                    width='100%'
                    height='450'
                    frameborder='0'
                    allowfullscreen=''
                    aria-hidden='false'
                    tabindex='0'
                />
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
