import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <html lang='es'>
            <Head>
                <meta
                    name='Description'
                    content='Empresa distribuidora de repuestos automotrices'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=5'
                />
                <title>Repuestos Ocaña</title>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
                    integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
                    crossorigin='anonymous'
                ></link>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid m-0 p-0'>
                <div className=''>
                    <Component {...pageProps} />
                    <footer className='col-12'>
                        <p>
                            Copyright &copy; 2020{' '}
                            <img
                                alt='Logo de la empresa'
                                src='./rpr-logo.svg'
                                alt='logo'
                            />{' '}
                            All Rights Reserved.
                        </p>
                    </footer>
                </div>
                <style jsx>
                    {`
                        footer {
                            background: #1a1e25;
                            color: #868c96;
                        }

                        footer p {
                            margin: 0;
                            color: #cdcdcd;
                            font-size: 1em;
                            padding: 40px 0;
                            text-align: center;
                        }

                        footer img {
                            width: 44px;
                        }
                    `}
                </style>
            </div>
            <script
                src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
                integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
                integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js'
                integrity='sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s'
                crossorigin='anonymous'
            ></script>
        </html>
    );
}

export default MyApp;
