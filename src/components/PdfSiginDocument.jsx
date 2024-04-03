import React from 'react'
import { jsPDF } from "jspdf"
import { autoTable } from 'jspdf-autotable';
import logotc from '../imagenes/logotc.png'

function PdfSiginDocument({ pagos }) {
    const handleclick = () => {
        console.log(pagos)
        // Crear un nuevo documento PDF
        const doc = new jsPDF('portrait', 'mm', 'letter');
        //!Imagen
        doc.addImage(logotc, 'PNG', 20, 5, 40, 20)
        //!Cabecera
        // Definir el tamaño de fuente y tipo de letra
        doc.setFontSize(10);
        doc.setFont('helvetica');
        // Definir el color del texto
        doc.setTextColor(0, 0, 0); // Negro
        // Agregar texto alineado al centro
        doc.text('Delegación Fiscal en Tesorería Gral. De la Pcia. SAF 999', 20, 30);
        //!Fecha
        doc.getFontSize(10);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0)
        doc.text('La Rioja, 23 Febrero de 2024', 147, 40)
        //!Asunto-Fecha
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0)
        doc.text('Asunto: Informe mensual por O.P.-', 140, 45)
        //!Al presidente del tribunal de cuentas de la provincia Cr. Jorge Omar Menem Su Despacho.
        //*
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('AL SR. PRESIDENTE', 20, 55)
        //*
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('DEL TRIBUNAL DE CUENTAS', 20, 60)
        //*
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('DE LA PROVINCIA', 20, 65)
        //*
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('CR. JORGE OMAR MENEM', 20, 70)
        //*
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        let texto = 'SU DESPACHO.'
        doc.text(texto, 20, 75)
        // Calcular las coordenadas para el subrayado
        const textWidth2 = doc.getTextWidth(texto)
        const x1 = 20; // Comienzo del texto
        const y1 = 70 + 0.5 * doc.getLineHeight(); // Altura del texto + un pequeño desplazamiento
        const x2 = x1 + textWidth2; // Fin del texto
        doc.line(x1, y1, x2, y1)
        //! Bajo cabecera
        doc.setFontSize(10);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('De mi mayor consideración', 20, 85)
        //!
        doc.setFontSize(10);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('Por la presente me dirijo a Ud., a los fines de:', 80, 90)

        //! 1° Parrafo:
        doc.setFontSize(10);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        // Definir las coordenadas del área de texto y los márgenes
        const margin = 5; // Margen de 2.5 cm (aproximadamente 1 pulgada)
        const startX = margin;
        const startY = margin;
        const maxWidth = doc.internal.pageSize.width - 8 * margin; // Ancho máximo del área de texto (considerando los márgenes)
        const maxHeight = doc.internal.pageSize.height - 3 * margin; // Altura máxima del área de texto (considerando los márgenes)

        const parrafo1 = 'Elevar Planilla, correspondiente a Órdenes de Pago pagadas por TESORERIA GENERAL DE LA PCIA, S.A.F. 999, a los responsables de los diferentes Servicios Administrativos y visadas por esta Delegación Fiscal en el mes de DICIEMBRE de 2023. Las mismas corresponden a O.P. pagadas en el mes de Julio del año 2023, con fondos de la CUENTA ÚNICA DEL TESORO cta. cte. 10-100.600/6.'
        const textLines = doc.splitTextToSize(parrafo1, maxWidth);
        const totalHeight = textLines.length * doc.getLineHeight();
        doc.text(textLines, 20, 100);

        // TODO: Lineas que me podrian servir: { 
        // //! Anexos
        // doc.setFontSize(12);
        // doc.setFont('helvetica');
        // doc.setTextColor(0, 0, 0);
        // const maxWidthAnexo = doc.internal.pageSize.width - 8 * margin;
        // const anexo1 = '•	Se adjunta ANEXO N°1, correspondiente a 5.139 Órdenes de Pago y 2.076 Pagos de Retenciones. '
        // const textLinesAnexo = doc.splitTextToSize(anexo1, maxWidthAnexo);
        // doc.text(textLinesAnexo, 20, 180);
        // //!Bajo anexo
        // doc.setFontSize(12);
        // doc.setFont('helvetica');
        // doc.setTextColor(0, 0, 0);
        // const maxWidthBajoAnexo = doc.internal.pageSize.width - 8 * margin;
        // const Bajoanexo1 = 'Información descargada del sistema E-sidif La Rioja (SISTEMA INTEGRADO DE INFORMACIÓN FINANCIERA). '
        // const textLinesBajoAnexo = doc.splitTextToSize(Bajoanexo1, maxWidthBajoAnexo);
        // doc.text(textLinesBajoAnexo, 30, 200);
        // TODO }
        const margin2 = 30;
        const maxWidth2 = doc.internal.pageSize.width - 2 * margin2;

        //!Anexo 
        const anexo1 = '•	Se adjunta ANEXO N°1, correspondiente a 5.139 Órdenes de Pago y 2.076 Pagos de Retenciones. '
        const textLinesAnexo = doc.splitTextToSize(anexo1, maxWidth2);

        doc.setFontSize(10);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0)
        let posY = 120;
        //!Doc.TEXT anexo
        textLinesAnexo.forEach(line => {
            doc.text(line, margin2, posY);
            posY += 5
        });

        //! Bajo anexo
        const Bajoanexo1 = 'Información descargada del sistema E-sidif La Rioja (SISTEMA INTEGRADO DE INFORMACIÓN FINANCIERA). '
        const textLinesBajoAnexo = doc.splitTextToSize(Bajoanexo1, maxWidth2);
        textLinesBajoAnexo.forEach(line => {
            doc.text(line, margin2, posY);
            posY += 5;
        })

        //! Listado responsable inicio:
        const headerListadoResponsable = 'Listado de responsables del organismo al día de la fecha: ';
        const textLinesHeaderListadoResponsable = doc.splitTextToSize(headerListadoResponsable, maxWidth2)
        textLinesHeaderListadoResponsable.forEach(line => {
            doc.text(line, margin2, posY);
            posY += 10;
        })

        //! Tesorero general:
        const tesoreroGeneralData = 'TESORERO GENERAL: Cr. CARLOS MARIO ZAPATA, DNI: 21.356.062, domicilio: América N° 466, B° Felipe Varela. Domicilio electrónico: saf999administracion@tclarioja.com.ar';
        const textLinesTesoreroGeneralData = doc.splitTextToSize(tesoreroGeneralData, maxWidth);
        textLinesTesoreroGeneralData.forEach(line => {
            doc.text(line, 20, posY);
            posY += 5;
        })
        //! SubTesorero
        const subTesoreroData = 'SUBTESORERO GENERAL DE PAGOS: Sr. DARDO RAMON FALCON, DNI: 17.408.488 domicilio: Base Margarita N° 30, B° Antártida IV.';
        const textLinesSubTesoreroData = doc.splitTextToSize(subTesoreroData, maxWidth);
        textLinesSubTesoreroData.forEach(line => {
            doc.text(line, 20, posY);
            posY += 5;
        })
        //!SubtesoreroConciliaciones
        const SubtesoreroConciliacionesData = 'Cra. MARIA INES FLORES, DNI: 24.991.509, domicilio: Manz. “O” casa 12, B° Faldeo del Velazco Sur.';
        const textLinesSubtesoreroConciliaciones = doc.splitTextToSize(SubtesoreroConciliacionesData, maxWidth);
        textLinesSubtesoreroConciliaciones.forEach(line => {
            doc.text(line, 20, posY);
            posY += 5;
        })
        posY += 5;
        doc.setFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('Sin otro particular saludo a Ud. Atentamente.-', 80, posY)
        posY += 20;
        //! Firma1
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('FIRMADO DIGITALMENTE', 100, posY);
        posY += 10;
        //! Firma2
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('CR. CACERES ENRIQUE EMMANUEL', 100, posY);
        posY += 10;
        //! Firma3
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('DELEGADO FISCAL', 100, posY);
        posY += 10;
        //! Firma4
        doc.getFontSize(11);
        doc.setFont('helvetica');
        doc.setTextColor(0, 0, 0);
        doc.text('TRIBUNAL DE CTAS. DE LA PCIA. DE LA RIOJA', 100, posY);

        const doc2 = new jsPDF({
            orientation: 'landscape' // Cambie a landscape para tener mas espacio horizontal
        });
        const tableData = pagos.map(function (p) {

            //toLocaleString() formatea numeros.
            //parseo el u.valor a float y lo formateo diciendo que sea en ES (. para miles y , para centavos) con maximo 2 digitos de centavos
            const netoFormateado = parseFloat(p.neto).toLocaleString('es-ES', { minimumFractionDigits: 2 });
            const retenidoFormateado = parseFloat(p.retenido).toLocaleString('es-ES', { minimumFractionDigits: 2 });
            const brutoFormateado = parseFloat(p.bruto).toLocaleString('es-ES', { minimumFractionDigits: 2 });

            return [p.saf, p.denomina_saf, p.beneficiario, p.observacion, p.fuente, p.clase_gasto, p.tipoop, p.nro_tramite, p.anioinforme, p.medio_pago, p.archivo, p.opsidif, p.numeroop, netoFormateado, retenidoFormateado, brutoFormateado, p.fecha_pago, p.diarecibido + p.mesrecibido + p.aniorecibido];
        });
        // Encabezado de la tabla
        const tableHeaders = [["|Datos del SAF", "", "", "", "", "", "", "|Datos del expediente", "", "", "", "", "", "|Monto", "", "", "|Fechas", ""]];
        // Encabezados de columna
        const headers = ["N° SAF", "Denominacion Saf", "Denominacion Beneficiario", "Observ. OP/Concepto", "F.F", "Clase Gto", "Tipo OP", "Nro. Expediente", "Año", "Medio Pago", "Nro. T.E.I.", "Nro. SIDIF OP", "Nro OP", "Imp. Neto OP", "Imp. Retenido", "Imp. Bruto OP", "Fecha de pago", "Fecha de visado"];
        // const headersValue = Object.keys(usuarios[0])
        // const headers = [headersValue[1], headersValue[2], headersValue[6], headersValue[7], headersValue[8], headersValue[9], headersValue[10], headersValue[12], headersValue[15], headersValue[16], headersValue[17], headersValue[23], headersValue[24], headersValue[25], headersValue[29] + headersValue[30] + headersValue[31]]

        // Define el ancho de cada columna
        const columnWidth = 70; // Puedes ajustar el ancho segun las necesidades


        // Calcula el ancho total de la tabla
        const tableWidth = headers.length * columnWidth;
        let startXX = 0;
        let startYY = 50;
        // Define el espacio entre columnas
        const spaceBetweenColumns = 5; // Ajusta el espacio entre columnas segun las necesidades


        // Dibuja los headers de la tabla
        headers.forEach(header => {
            doc.text(startXX, startYY, header);
            startXX += columnWidth + spaceBetweenColumns; // Añade el ancho de la columna y el espacio entre columnas
        });

        const combinedHeaders = tableHeaders.concat([headers]);

        const options = {
            styles: {
                fontSize: 5,
                margin: 1 // Ajusta el tamaño de fuente según tus necesidades
            }
        };

        doc2.autoTable({
            head: combinedHeaders,
            body: tableData,
            theme: 'striped',
            margin: { top: 40, left: 2, right: 2 },
            addPageContent: function (data) {
                doc2.setFontSize(10)
                doc2.text("Anexo N° 1", 130, 15)
                doc2.text("Informe mensual", 130, 20)
                doc2.setFontSize(7)
                doc2.text("DELEGACION FISCAL EN TESORERIA GENERAL DE LA PROVINCIA SAF 999", 2, 33)
                doc2.setFontSize(7)
                doc2.text("Informe correspondiente al mes de Diciembre 2023 / O.P pagadas en Julio del 2023", 2, 38)
            },
            ...options

        });



        // Guardar el documento
        doc2.save('table.pdf');
        // doc.save('documento_personalizado.pdf');
    }
    return (
        <button
            class="bg-cyan-800 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            onClick={handleclick}
        >
            GENERAR Documento
        </button>


    )
}

export default PdfSiginDocument;
