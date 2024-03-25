import React, { useState } from 'react'
import userApi from '../api/userApi'
import PDFgenerador from './PDFGenerador';




const Dashboard = () => {
    const [usuario, setUsuarios] = useState();

    const handleClick = async () => {
        //Con este try-catch siempre vas a querer hacer solicitudes al backend.
        //Desde el backend se maneja como se devuelven la informacion de la base de datos.
        // Y vos la tratas en el frontend.
        //* por ejemplo el console.log(data) devuelve un Objeto con config/data/header/request/status
        //la informacion esta en data. Entonces para acceder seria => console.log(data.data)
        // En data tenes dos campos. ok/resultados
        //! seria data.data.resultados
        try {

            const data = await userApi.get('/users')
            //* console.log(data)
            //! console.log(data.data.resultados); Que seria un array de objetos(la mejor forma de tratar datos) [{},{},{},{},{},{}] 
            //Seteamos lo que queremos en un estado => 
            setUsuarios(data.data.resultados)

        } catch (error) {
            console.log(error);
        }
    }

    const handleClick2 = () => {
        console.log(usuario)
    }


    return (
        <div className='flex p-4 bg-slate-400 w-screen justify-center '>
            <div>
                <button
                    class="bg-cyan-800 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                    onClick={handleClick}
                >
                    Obtener datos 
                </button>
                <button
                    class="bg-cyan-800 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                    onClick={handleClick2}
                >
                    Ver Resultados
                </button>
                {usuario && 
                <PDFgenerador usuario={usuario} /> }
                
            </div>



        </div>
    )
}

export default Dashboard
