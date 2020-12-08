import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid p-0 m-0'>
                <div className='row p-0 m-0'>
                    <Component {...pageProps} />
                </div>
                <footer>
                    <p>
                        Copyright &copy; 2020{' '}
                        <img src='./rpr-logo.svg' alt='logo' /> All Rights
                        Reserved.
                    </p>
                </footer>
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
                src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
                integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
                integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
                integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
                crossorigin='anonymous'
            ></script>
        </>
    );
}

export default MyApp;
