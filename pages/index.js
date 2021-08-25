import Head from 'next/head'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>True | Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="relative flex flex-col items-center justify-center w-full h-full flex-auto text-center font-poppins">
        <div className="py-5 w-full h-3/5 flex items-start justify-center bg-waves bg-cover">
          <img className="h-32" src="./img/Logotipo_Blanco.png" alt="Logo True" />
        </div>
        <div className="w-full h-2/5">
        </div>

        <div className="p-6 sm:p-10 h-4/5 w-full sm:h-3/4 lg:w-3/4 absolute bottom-0 left-auto flex items-center justify-center bg-white shadow-xl rounded-xl rounded-b-none">
          <div className="flex flex-col items-center">
            <div className="text-gray-900">
              <h1 className="py-5 font-semibold text-3xl sm:text-5xl">¡Estamos preparando algo bueno!</h1>
              <p className="py-5 font-light text-xl sm:text-2xl">Puedes encontrarnos en redes sociales o enviarnos tu correo para recibir más información.</p>
            </div>

            <ContactForm />

            <div className="py-5 flex items-center justify-center">
              <a className="py-1 rounded-lg focus:outline-none" href="mailto:info@truebydesign.co">
                <svg className="mx-5 w-9 h-9 sm:w-11 sm:h-11 text-blue-800 transition ease-in-out duration-200 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <defs />
                  <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 002 13h12a1 1 0 00.966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </a>

              <a className="py-1 rounded-lg focus:outline-none" href="https://www.instagram.com/true.bydesign/" target="_blank">
                <svg className="mx-5 w-8 h-8 sm:w-10 sm:h-10 text-blue-800 transition ease-in-out duration-200 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <defs />
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                </svg>
              </a>

              <a className="py-1 rounded-lg focus:outline-none" href="https://facebook.com/truebydesign.gt/" target="_blank">
                <svg className="mx-5 w-8 h-8 sm:w-10 sm:h-10 text-blue-800 transition ease-in-out duration-200 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <defs />
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
