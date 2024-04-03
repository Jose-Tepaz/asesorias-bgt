import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';




function CalendlyOneWrapp () {

    return (

        <>
        <div>
               <h2 className='head-master-form'>Agenda tu asesoría</h2>
               <p className='info-text'>Selecciona una fecha para agendar tu asesoría.</p>
            </div>
        <InlineWidget url="https://calendly.com/josetepaz28/30min" />
        </>

    )
    
}

export { CalendlyOneWrapp }

