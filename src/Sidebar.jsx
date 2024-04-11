import React from 'react';
import './Sidebar.css';
import logo from './logo-orange-b360.svg';


function Sidebar() {
    return (
        <div className='wrapp-side-bar'>
            <img src={logo} className="logo-app" alt="logo" />
            <div className='wrapp-text-head-side-bar'>
            <p className='info-text'>Te ofrecemos dos opciones de asesorías para acompañarte en tus tratamientos.</p>
            <p className='info-text-strong'>Tú decides cuál se ajusta mejor a tus necesidades.</p>
            </div>
            <div className='wrapp-card-side-bar'>
                <p className='head-card-sidebar'>¿Tienes dudas sobre tu planificación?</p>
                <div className='card-side-bar'>
                <p className='text-head-card'>Asesoría con Planificador Borgatta</p>
                <div>
                <p className='info-text'>Revisamos:</p>
                <ul className='info-text'>
                    <li>Etapas y movimientos de la planificación</li>
                    <li>En qué etapa realizar IPR</li>
                    <li>Desajuste del alineador</li>
                    <li>Revisión intermedia</li>
                    <li>Se perdió el tracking</li>
                </ul>

                </div>
                
                <p className='info-text-ligth'>* Gratis en cualquier etapa de tu tratamiento</p>
                </div> 
            </div>
            <div className='wrapp-card-side-bar'>
                <p className='head-card-sidebar'>¿Tienes dudas clínicas de tu tratamiento? </p>
                <div className='card-side-bar'>
                <p className='text-head-card'>Asesoría con Ortodoncista Borgatta:</p>
                <div>
                <p className='info-text'>Revisamos inquietudes cómo:</p>
                <ul className='info-text'>
                    <li>Diagnóstico</li>
                    <li>Plan de tratamiento</li>
                    <li>Biomecánica</li>
                    <li>Gramajes</li>
                    <li>Uso de botones, pinzas, orthoimplantes y power arms</li>
                </ul>

                </div>
                
                <p className='info-text-ligth'>*1 gratuita por tratamiento, después tiene un costo de $1.00 MXN</p>
                </div> 
            </div>     
        </div>
    )
}

export { Sidebar };