import React from 'react'
import { jsPDF } from "jspdf"
import { autoTable } from 'jspdf-autotable';
import logotc from '../../imagenes/logotc.png';

const GeneradorPdfFm1 = ({ pago, cantidadOp }) => {
    const handleClick = () => {
        console.log(pago)
        const doc = new jsPDF('portrait', 'mm', 'letter');
        const pageHeight = doc.internal.pageSize.height;
        doc.setFontSize(12)
        const textMargin1_8 = '12345678'
        const textMarginargin8_45 = '01112131415161718192021222324252627282930313233343536373839404142434445'
        const textMarginargin011_45 = '89101112131415161718192021222324252627282930313233343536373839404142434445'

        const WidthMargin1_8 = doc.getTextWidth(textMargin1_8);
        const WidthMargin8_45 = doc.getTextWidth(textMarginargin8_45);
        const WidthMargin011_45 = doc.getTextWidth(textMarginargin011_45);

        let iterations = 1; // we need control the iterations of line
        const margin = 20; //top and botton margin in mm
        const marginRecuadro = 13
        let posYSaltoLineas = 50;
        const defaultYJump = 5; // default space btw lines
        //!Primera Parte
        doc.addImage(logotc, 'PNG', 20, 5, 60, 20)
        doc.rect(100, 5, 100, 27)
        doc.line(20, 35, 190, 35)
        // * Texto dentro del rectangulo. (FM I o II):
        // * Titulo FM I o FM II
        // * centrar texto  => const xCenter = 100 + (areaWidth / 2) - (doc.getStringUnitWidth(firstLine) * doc.internal.getFontSize() / 2);
        doc.setFontSize(8)
        const lineaFM = 'FM I'
        const xFmCenter = 100 + (100 / 2) - (doc.getStringUnitWidth(lineaFM) * doc.internal.getFontSize() / 2)
        doc.text(lineaFM, xFmCenter, 10); // Texto centrado horizontalmente
        const dentroDeRecuadro = 'NOTA DE ELEVACIóN Y CUADRO INFORME MENSUAL EFECTUADO POR DELEGADO FISCAL DE SAF (CON MOVIMIENTO SIN ENTREGA DE FONDOS A MUNICIPIOS)';
        const textLinesDentroDeRecuadro = doc.splitTextToSize(dentroDeRecuadro, 90) // (..., ACA controlo el ancho del texto)
        textLinesDentroDeRecuadro.forEach(line => {
            let posY = marginRecuadro + defaultYJump * iterations++;
            if (posY > pageHeight - marginRecuadro) {
                doc.addPage();
                iterations = 1;
                posY = marginRecuadro + defaultYJump * iterations++;
            }
            doc.text(105, posY, line);
        });
        doc.setFontSize(11)
        doc.setTextColor(0, 0, 0)
        const fecha = `La Rioja, ${pago.mesrecibido}0 de ${pago.aniorecibido}0`
        const hojaAncho = doc.internal.pageSize.width;
        //TODO: Ver diferencias entre los calculos de ancho
        const anchoFecha = doc.getStringUnitWidth(fecha) * doc.internal.getFontSize()
        const anchoFecha2 = doc.getTextWidth(fecha)
        doc.text(fecha, 190 - anchoFecha2, 40)
        //! FIN primera parte
        //!Al presidente del tribunal de cuentas de la provincia Cr. Jorge Omar Menem Su Despacho.
        doc.setFontSize(12)
        //*
        const primeraLineaEncabezado = 'AL SEÑOR PRESIDENTE';
        const textLinesPrimeraLineaEncabezado = doc.splitTextToSize(primeraLineaEncabezado, 90) // (..., ACA controlo el ancho del texto)
        textLinesPrimeraLineaEncabezado.forEach(line => {

            doc.text(margin, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        });
        const segundaLineaEncabezado = 'DEL TRIBUNAL DE CUENTAS DE LA PROVINCIA DE LA RIOJA';
        const textLinesSegundaLineaEncabezado = doc.splitTextToSize(segundaLineaEncabezado, 90) // (..., ACA controlo el ancho del texto)
        textLinesSegundaLineaEncabezado.forEach(line => {

            doc.text(margin, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        });
        //*

        const terceraLineaEncabezado = 'Cr. CARLOS MENEM';
        const textLinesTerceraLineaEncabezado = doc.splitTextToSize(terceraLineaEncabezado, 90) // (..., ACA controlo el ancho del texto)
        textLinesTerceraLineaEncabezado.forEach(line => {

            doc.text(margin, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        });
        //*
        const cuartaLineaEncabezado = 'SU DESPACHO:';
        const textLinesCuartaLineaEncabezado = doc.splitTextToSize(cuartaLineaEncabezado, 90) // (..., ACA controlo el ancho del texto)
        const textWidth2CuartaLineaEncabezado = doc.getTextWidth(cuartaLineaEncabezado)
        const y1SubrayadoCuartaLinea = posYSaltoLineas + 0.5;
        textLinesCuartaLineaEncabezado.forEach(line => {
            doc.text(margin, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        });
        doc.line(margin, y1SubrayadoCuartaLinea, margin + textWidth2CuartaLineaEncabezado, y1SubrayadoCuartaLinea)

        // TODO: Codigo para subrayar
        // // Calcular las coordenadas para el subrayado
        // const textWidth2 = doc.getTextWidth(texto)
        // const x1 = 20; // Comienzo del texto
        // const y1 = 70 + 0.5 * doc.getLineHeight(); // Altura del texto + un pequeño desplazamiento
        // const x2 = x1 + textWidth2; // Fin del texto
        // doc.line(x1, y1, x2, y1)


        doc.setFontSize(12)
        //! Comienzo de cuerpo de documento
        const primeraLineaCuerpo = 'La/El Delegado Fiscarl Cr/Cra ...........................';
        const textLinesPrimeraLineaCuerpo = doc.splitTextToSize(primeraLineaCuerpo) // (..., ACA controlo el ancho del texto)
        textLinesPrimeraLineaCuerpo.forEach(line => {

            doc.text(margin * 5, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        });
        const segundaLineaCuerpo = 'se dirige a Ud., a los fines de:'
        const textLinesSegundaLineaCuerpo = doc.splitTextToSize(segundaLineaCuerpo, 170);
        textLinesSegundaLineaCuerpo.forEach(line => {
            doc.text(margin, posYSaltoLineas, line);
            posYSaltoLineas += 5;
        })
        posYSaltoLineas += 5
        //! Primer Punto del cuerpo
        const splitTextOptions = { splitBy: { char: "" } };
        const primerPuntoCuerpo = `1-Elevar Planilla, correspondiente a 99999 Órdenes de Pago pagadas por los responsables de ${pago.denomina_saf}, ${pago.saf}, y visadas por esta Delegación Fiscal en el mes de ${pago.mesrecibido} de ${pago.aniorecibido} Se adjunta Anexo I, conforme a lo establecido en el artículo 316 y 319 de la Resolución 19/19 del Tribunal de cuentas. Las ordenes visadas se adecuan a la normativa vigente.`;
        const textLinesPrimerPuntoCuerpo = doc.splitTextToSize(primerPuntoCuerpo, WidthMargin011_45) // (..., ACA controlo el ancho del texto)
        textLinesPrimerPuntoCuerpo.forEach((line, ix) => {
            console.log(line, ix)
            if (ix === 0) {
                doc.text(margin + 5, posYSaltoLineas, line);
            } else {
                doc.text(margin + 7, posYSaltoLineas, line);

            }
            posYSaltoLineas += 5;
        });
        posYSaltoLineas += 5
        //! Segundo Punto del cuerpo
        const segundoPuntoCuerpo = '2-Conforme lo establece el art. 373 de la Resolución 19/19 del Tribunal de Cuentas y según informe de las autoridades,  el SAF  NO  ha efectuado transferencias a Municipios.';
        const textLinesSegundoPuntoCuerpo = doc.splitTextToSize(segundoPuntoCuerpo, WidthMargin011_45) // (..., ACA controlo el ancho del texto)
        textLinesSegundoPuntoCuerpo.forEach((line, ix) => {
            console.log(line, ix)
            if (ix === 0) {
                doc.text(margin + 5, posYSaltoLineas, line);
            } else {
                doc.text(margin + 7, posYSaltoLineas, line);

            }
            posYSaltoLineas += 5;
        });
        posYSaltoLineas += 5
        //! Tercer punto del cuerpo
        const tercerPuntoCuerpo = '3-Se informa Listado de Responsables del organismo al día de la fecha:';
        const textLinesTercerPuntoCuerpo = doc.splitTextToSize(tercerPuntoCuerpo, WidthMargin011_45) // (..., ACA controlo el ancho del texto)
        textLinesTercerPuntoCuerpo.forEach((line, ix) => {
            console.log(line, ix)
            if (ix === 0) {
                doc.text(margin + 5, posYSaltoLineas, line);
            } else {
                doc.text(margin + 7, posYSaltoLineas, line);

            }
            posYSaltoLineas += 5;
        });
        posYSaltoLineas += 5
        //! Listado de Responsables 
        //* Primer Responsable
        // Cargo
        const textPrimerResponsableCargo = "CARGO: ";
        const textWidthTextPrimerResponsableCargo = doc.getTextWidth(textPrimerResponsableCargo);
        doc.text(margin, posYSaltoLineas, textPrimerResponsableCargo);
        const primerResponsableCargo = "...........";
        doc.text(margin + textWidthTextPrimerResponsableCargo, posYSaltoLineas, primerResponsableCargo);
        posYSaltoLineas += 5;
        // APELLIDO Y NOMBRE
        const textPrimerResponsableNyA = "APELLIDO Y NOMBRE: ";
        const textWidthTextPrimerResponsableNyA = doc.getTextWidth(textPrimerResponsableNyA);
        doc.text(margin, posYSaltoLineas, textPrimerResponsableNyA);
        const primerResponsableNyA = "...........";
        doc.text(margin + textWidthTextPrimerResponsableNyA, posYSaltoLineas, primerResponsableNyA);
        posYSaltoLineas += 5;
        // DNI N°
        const textPrimerResponsableDni = "DNI N°:";
        const textWidthTextPrimerResponsableDni = doc.getTextWidth(textPrimerResponsableDni);
        doc.text(margin, posYSaltoLineas, textPrimerResponsableDni);
        const primerResponsableDni = "...........";
        doc.text(margin + textWidthTextPrimerResponsableDni, posYSaltoLineas, primerResponsableDni);
        posYSaltoLineas += 5;
        //DOMICILIO REAL
        const textPrimerResponsableDomicilioReal = "DOMICILIO REAL: ";
        const textWidthTextPrimerResponsableDomicilioReal = doc.getTextWidth(textPrimerResponsableDomicilioReal);
        doc.text(margin, posYSaltoLineas, textPrimerResponsableDomicilioReal);
        const primerResponsableDomicilioReal = "...........";
        doc.text(margin + textWidthTextPrimerResponsableDomicilioReal, posYSaltoLineas, primerResponsableDomicilioReal)
        posYSaltoLineas += 5;
        //DOMICILIO ESPECIAL
        const textPrimerResponsableDomicilioEspecial = "DOMICILIO ESPECIAL: ";
        const textWidthPrimerResponsableDomicilioEspecial = doc.getTextWidth(textPrimerResponsableDomicilioEspecial)
        doc.text(margin, posYSaltoLineas, textPrimerResponsableDomicilioEspecial)
        const primerResponsableDomicilioEspecial = "...........";
        doc.text(margin + textWidthPrimerResponsableDomicilioEspecial, posYSaltoLineas, primerResponsableDomicilioEspecial)
        posYSaltoLineas += 5;
        //DOMICILIO ELECTRONICO
        const textPrimerResponsableDomicilioElectronico = "DOMICILIO ELECTRONICO: ";
        const textWidthPrimerResponsableDomicilioElectronico = doc.getTextWidth(textPrimerResponsableDomicilioElectronico);
        doc.text(margin, posYSaltoLineas, textPrimerResponsableDomicilioElectronico);
        const primerResponsableDomicilioElectronico = "...........";
        doc.text(margin + textWidthPrimerResponsableDomicilioElectronico, posYSaltoLineas, primerResponsableDomicilioElectronico)
        posYSaltoLineas += 15;

        //! Firmas:
        //* Primera Linea
        const textPrimeraLineaFirma = 'Es mi informe.-'
        doc.text(margin * 3, posYSaltoLineas, textPrimeraLineaFirma)
        posYSaltoLineas += 10
        //* Segunda Linea
        const textSegundaLineaFirma = "FIRMADO DIGITALMENTE..........................."
        doc.text(margin * 2, posYSaltoLineas, textSegundaLineaFirma)
        posYSaltoLineas += 5;
        //* Tercera Linea
        const textTerceraLineaFirma = "Delegada/o Fiscal-SAF..........................."
        doc.text(margin * 4, posYSaltoLineas, textTerceraLineaFirma);
        posYSaltoLineas += 5;
        //! Final de pagina
        const textUltimaLinea = "Tribunal de Cuentas de la Pcia de La Rioja";
        doc.text(margin * 3, posYSaltoLineas, textUltimaLinea)
        doc.save('documento_personalizado.pdf');
    }
    return (
        <button
            class="bg-cyan-800 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            onClick={handleClick}
        >
            GENERAR PDF FM 1
        </button>
    )
}

export default GeneradorPdfFm1;