import React from 'react'
import { jsPDF } from "jspdf"
import { autoTable } from 'jspdf-autotable';
import logotc from '../imagenes/logotc.png'

function PDFgenerador({ usuario }) {

    const handleclick = () => {
        console.log(usuario)
        const doc = new jsPDF();
        const headers = Object.keys(usuario[0])
        const columns = [headers[1], headers[2], headers[3], headers[4]]
        const data = usuario.map(function (u) {
            return [u.nombre, u.apellidos, u.cuil, u.correo]
        })
        doc.addImage(logotc, 'PNG', 10, 5, 50, 25)
        doc.autoTable({
            starty: 1000,
            margin: { top: 35 },
            head: [columns],
            body: data
        })

        doc.save("factura.pdf")
    }
    return (
        <button
            class="bg-cyan-800 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            onClick={handleclick}
        >
            GENERAR PDF
        </button>


    )
}

export default PDFgenerador;
