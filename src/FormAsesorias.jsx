
import React, { useEffect } from 'react';
import './FormAsesorias.css'
import { Radio, Form, Button, Input, } from 'antd';
import { UploadFile } from './UploadFiles/OclusalSuperior';
import { Oclusalinferior } from './UploadFiles/Oclusalinferior';
import { FrontalSinAlineador } from './UploadFiles/FrontalSinAlineador'; 
import { FrontalConAlineador } from './UploadFiles/FrontalConAlineador';
import { LateralDerechaOclusion } from './UploadFiles/LateralDerechaOclusion'; 
import { LateralizquierdaOclusion } from './UploadFiles/LateralizquierdaOclusion';
import { PanoramicaCraneo } from './UploadFiles/PanoramicaCraneo';
import { LateralCraneo } from './UploadFiles/LateralCraneo';
import { AreaMotivoConsulta } from './UploadFiles/AreaMotivoConsulta';
import { CalendlyOneWrapp } from './CalendlyOneWrapp';

import { Testupload } from './Testupload';
import {useState} from 'react';
import alerticon from './alert-icon.svg';
import iconImportant from './assets/icon-alert-important.svg';
import AlertError from './assets/status-icon.svg';
import Swal from 'sweetalert2';

const { TextArea } = Input;

function FormAsesorias () {
   
    const [value, setValue] = useState(1);
    const [values, setValues] = useState(1);

    //cambia el estado del campo requerido EL CASO SE ECNUENTRA
    const [componentNoRequerid, setComponentNoRequerid] = useState(true);

    //cambia el estado del campo requerido EL CASO EN ALINEADOR
    const [inputAlineador, setInputAlineador] = useState(true);

     //cambia el estado del campo requerido TIPO DE ASESORÍA
     const [inputTasesoria, setInputTasesoria] = useState(true);

      //cambia el estado del campo requerido NECESITA FACTURA
      const [inputNecesitaFactura, setInputNecesitaFactura] = useState(true);

    //muestra el grupo de opciones
    const [componentDisabled1, setComponentDisabled1] = useState(null);

    //Si el caso se encuentra en boca
    const [casoEnBoca, setCasoEnBoca] = useState(null);

    //Asesoria clinica
    const [asesoriaClinica, setAsesoriaClinica] = useState(null);

    //Asesoria Planificacion
    const [asesoriaPlanificacion, setAsesoriaPlanificacion] = useState(null);

    //Para activar upload img
    const [activeUploadImg, setActiveUploadImg] = useState(null);

     //Activa / Oculta el formulario entero
     const [activForm, setActivForm] = useState(null);

    //Activa la seccion de calendly
    const [activCalendly, setActivCalendly] = useState(null);

    //Estado que muestra u oculta el area  de factura
    const [facturaIs, setFacturaIs] = useState(false);

    //Estado que envia el dato a Airtable si necesita o no factura
    const [facturaNeed, setFacturaNeed] = useState(false);

    //Ya tomo su primera acesoría, tomamos este dato para mandarlo a Airtable
    const [firstCallStatus, setFirstCallStatus] = useState(null);

    // Ya tiene una planificación
    const [tratmentStatus, setTratmentStatus] = useState(null);

    //array para setear tipoAsesoria
    const [tipoAsesoriaArr, serTipoAsesoriaArr] = useState("");

    //Recibe URL imagen 1
    const [oclusalSuperior, setOclusalSuperior] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe URL imagen Oclusal inferior
    const [oclusalInferior, setOclusalInferior] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe URL imagen Frontal Sin Alineador
    const [frontalSinAlineador, setFrontalSinAlineador] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe URL imagen Frontal Con alineador
    const [frontalConAlineador, setFrontalConAlineador] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe URL imagen Lateral derecha
    const [lateralDerecho, setLateralDerecho] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe URL imagen Lateral Izquierda
    const [lateralIzquierdo, setLateralIzquierdo] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Panorámica de cráneo
    const [panoramicaCraneo, setPanoramicaCraneo] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');
     
    //Recibe imagen Lateral de cráneo
    const [lateralCraneo, setLateralCraneo] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

    //Recibe imagen Área de consulta
    const [areaConsulta, setAreaConsulta] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');


    //console.log(datosForm);
    //console.log(oclusalInferior);
    //console.log("aqui esta la URL de la imagen 1");

    //Recibiendo URL de Oclusal Superior
    const URLimage = (imagenURL) => {
      setOclusalSuperior({uno:imagenURL})
    }
    
    //Recibiendo URL de Oclusal Inferior
    const URLOclusalinferior = (imagenURL) => {
      setOclusalInferior(imagenURL)
    }

    //Recibiendo URL de Frontal sin alineador
    const URLFrontalSinAlineador = (imagenURL) => {
      setFrontalSinAlineador(imagenURL)
    }

    //Recibiendo URL de Frontal Con alineador
    const URLFrontalConAlineador = (imagenURL) => {
      setFrontalConAlineador(imagenURL)
    }

    //Recibiendo URL de Lateral Derecho Oclusion
    const URLLateralDerechaOclusion = (imagenURL) => {
      setLateralDerecho(imagenURL)
    }

    //Recibiendo URL de Lateral izquierda en oclusión
    const URLLateralizquierdaOclusion = (imagenURL) => {
      setLateralIzquierdo(imagenURL)
    }

    //Recibiendo URL de Panorámica de cráneo
    const URLPanoramicaCraneo = (imagenURL) => {
      setPanoramicaCraneo(imagenURL)
    }

    //Recibiendo URL de Lateral de cráneo
    const URLLateralCraneo = (imagenURL) => {
      setLateralCraneo(imagenURL)
    }

    //Recibiendo URL de Area consulta
    const URLAreaMotivoConsulta = (imagenURL) => {
      setAreaConsulta(imagenURL)
    }



     //setea valores en radio buttons
    const seEncuentra = [
      {
        label: 'En boca',
        value: 'En boca',
       
      },
      {
        label: 'No está en boca',
        value: 'No está en boca',
        
      },
    ];

    //setea valores en radio buttons

    const tipoAsesoria = [
        {
          label: 'Asesoría clínica',
          value: "Asesoría clinica",
        },
        {
          label: 'Asesoría de planificación',
          value: "Asesoría de planificación",
        },
      ];

      //Necesita factura?
    const factura = [
      {
        label: 'Solicitar factura',
        value: "true",
      },
      {
        label: 'No necesito factura',
        value: "false",
      },
    ];
    
    //Condicion segun datos de URL
    //?treatment_id=1&has_planification=true&admin_id=1&first_call=true
    //0: "?treatment_id=1" Id del tratamiento
    //1: "has_planification=true/false" //SI tiene o no planificación
    //2: "admin_id=1" // Id del administrador
    //3: "first_call=true" // SI ya tomo la asesoría gratuita

    //JS Encryptation hash / Crypto  

    useEffect (() => {

        const getUrl= window.location.search;
        const separateUrl = getUrl.split("&");
        //console.log(separateUrl)

        //si ya existe una planificación
        if (separateUrl[1] == "has_planification=false" ) {
            //console.log(window.location.search);
            //console.log("Si funciona la URL");
            //console.log(window.location);
           //const activeModuleForm = setComponentDisabled(true);
            //setActive1();
            //defini si los campos serás requeridos
            setComponentNoRequerid(false)
            setInputAlineador(false);
            setInputTasesoria(false);
            setComponentDisabled1("none-div");
            setActiveUploadImg("activemos");
            setFacturaIs("non-div");

            setTratmentStatus(false)

        } else if (separateUrl[3] === "first_call=true" ){
          //campo requerido o no
          setInputNecesitaFactura(true);
          //muestra o no el campo
          setFirstCallStatus(true)

        }else if (separateUrl[3] === "first_call=false" ){
          //campo requerido o no
          setInputNecesitaFactura(false);
          //muestra o no el campo
          setFirstCallStatus(false)

        } 
        
        else {
          setFacturaIs("mostrar");
          setComponentNoRequerid(true);
          setInputTasesoria(true);
          setInputNecesitaFactura(false);

          setTratmentStatus(true)
          setFirstCallStatus(false)
          //setActivForm("false");
          
          alertaError();
          //alertaPay();
          //alertaSucces();
        
        
    }
   
        
    });
    //Oculta o muestra el area del form
    let changeclass = componentDisabled1 != null ? ' none-div' : '';
    let changeclassEnboca = casoEnBoca == null ? ' none-div' : '';
    let hideShowFactura = firstCallStatus != true ? ' none-div' : '';
    

  //On change group el caso se encuentra
    const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    if (e.target.value === "En boca"){
      setCasoEnBoca(e.target.value);

      setActiveUploadImg("activemos");
      setInputAlineador(true);
      

           
    } else {
      setInputAlineador(false);
        setCasoEnBoca(null);
        setActiveUploadImg(null);
        
        
    }
    serTipoAsesoriaArr(e.target.value);
   
    };

//On change TIpo de asesoria
    const onChanges = (e) => {
      console.log('radio checked', e.target.value);
      setValues(e.target.value);
      if (e.target.value === "En boca Asesoría clinica") {
        
        setActiveUploadImg("activemos")
      } else if (e.target.value === "En boca Planificación") {
        setActiveUploadImg("activemos")
        
      }else if (e.target.value === "No esta en boca Asesoriía clinica") {
        setActiveUploadImg(null)
        
      }else if (e.target.value === "No esta en boca Planificacion") {
        
        setActiveUploadImg(null)
      }
      isPaythisEvent()
    };

    // Esta funcion se ejecuta para mostrar popup si es una planbificación que se debe cobrar
    function isPaythisEvent() {
      const getUrl= window.location.search;
      const separateUrl = getUrl.split("&");
      console.log("se esta ejecutando")

      if (separateUrl[3] == "first_call=true") {
        alertaPay();
      }
    }
    //On Factura
    const onFactura = (e) => {
      console.log('radio checked', e.target.value);

      if (e.target.value === "true") {
        
        setFacturaNeed(true);
      } else {
        
        setFacturaNeed(false);
      }
      
    };

    let activeUploadImgstart = activeUploadImg == null ? ' none-div' : '';

    console.log(activeUploadImg);
    console.log("aqui el datooooooooooooo");

    //Load BTN
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        
        newLoadings[index] = true;
        return newLoadings;
      });
 
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          console.log("ya se envio");
          
          return newLoadings;         
        });
      }, 2000);
    };


 //Alertas
//modal de confirmación
const alertaSucces=()=>{
  Swal.fire({
  title: "Importante",
  html: "Tendrás <span>10 minutos de tolerancia</span> para presentarte a tu asesoría. Después de esto daremos como finalizada la llamada y deberás agendar una nueva con costo. Si lo necesitas, <span>puedes reagendar tu asesoría hasta con 48 horas de anticipación.</span>",
  imageUrl: iconImportant,
imageWidth: 60,
imageHeight: 60,
showCloseButton: true,
backdrop: `testss`,
confirmButtonText: `Estoy de acuerdo`,
  customClass: {
      popup: 'popAlert',
      title: 'titlePopup',
      htmlContainer: 'textpopup',
      confirmButton: 'confirmBtn',
      closeButton: 'clodeBtnBtn'

  }
}).then((result) => {
  
  //window.location.reload();
  setActivForm("false");
  setActivCalendly("true");
  
});
}

let muestraCalendly = activCalendly === null ? ' none-div' : '';
let ocultaForm = activForm === "false" ? ' none-div' : '';

//modal de error
const alertaError=()=>{
  Swal.fire({
  title: "Algo salió mal...",
  html: "Hemos tenido un problema para cargar la información necesaria para agendar tu asesoría. Por favor vuelve a intentarlo. ",
  imageUrl: AlertError,
imageWidth: 60,
imageHeight: 60,
showCloseButton: false,
showConfirmButton: false,
backdrop: '#F6F6F8',
allowEnterKey: false,
allowEscapeKey: false,
allowOutsideClick: false,
confirmButtonText: `Volver a intentarlo`,
  customClass: {
      popup: 'popAlert',
      confirmButton: 'btn-siguiente',
      title: 'titlePopup',
      htmlContainer: 'textpopup',
      closeButton: 'clodeBtnBtn',
      

  }
}).then((result) => {
  
});
}

//modal asesorpia debe cobrarse

const alertaPay=()=>{
  Swal.fire({
  title: "Antes de continuar",
  html: "<ul><li>Ya tuviste tu asesoría clínica gratuita, por lo que <span>esta asesoría tendrá un costo de $1.00 MXN.</span></li><li>Asegúrate de que el Perfil Fiscal que tienes configurado en el Portal B360 <strong>sea el que deseas utilizar para facturar tu asesoría.</strong></li><li>Si no has establecido un Perfil Fiscal predeterminado aún, puedes hacerlo desde tu Perfil en el Portal B360; de lo contrario no te generaremos factura. <span>Podrás seleccionar la opción ‘No necesito factura’.</span></li></ul>",
  
  imageUrl: AlertError,
imageWidth: 60,
imageHeight: 60,
showCloseButton: true,
showConfirmButton: false,
backdrop: '#F6F6F8',
allowEnterKey: true,
allowEscapeKey: true,
allowOutsideClick: true,
confirmButtonText: `Volver a intentarlo`,
  customClass: {
      popup: 'popAlert',
      confirmButton: 'btn-siguiente',
      title: 'titlePopup',
      htmlContainer: 'textpopup-pay',
      closeButton: 'clodeBtnBtn',
      

  }
});
}

//funcion que general el registro en airtable
//const registrandoAsesoria = (e) => {
//      //const convert = JSON.stringify(e)
////console.log(convert);
//console.log(e.TextArea);
//console.log(datosForm.uno)
//console.log("ya estamos aca");
//
//}

async function registrandoAsesoria(e) {
  enterLoading(0);
  try {
      const response = await fetch('https://api.airtable.com/v0/appHsHG762lLNWvtr/tblJAIDAKMMtwGX39', {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
          'Authorization': 'Bearer patIWUuGVMhjM6ChE.41b3f1abc3795a2e56b25b0f07e78eba8eb745cd988484f3ce07e525a143da49',
      },
      body: JSON.stringify({
          "records": [{
              "fields": {
                  "fld47enEc8mERiaGA": "`${idDataApi}`", //Id liente
                  "fldFwereJT6gt200o": "`${adressSelect}`", //Id Admin
                  "fldftOSA2WktZLZly": "`${mesajeValue}`", //Tiene planificación
                  "fldSnX8x69DN6Fiur": e.ElcasoSeEncuentra, //El caso se ecnuentra
                  "fldsCZjm564gdNVgi": e.IndicaAlineador, //Alineador
                  "fldojtzk8egAZSRSR": e.TipoDeAsesoria, //Tipo de asesoría
                  "fldLHNajCHT0TiTEG": e.TextArea, //Mensaje
                  "fldyc9cZ56SFyhx9F": firstCallStatus, //Tomo asesoría gratutita?
                  "fldLX3ThXbADUNWVK": facturaNeed, //Necesita factura     
                  "fldvqEwaivJsemQI2": oclusalSuperior.uno, //Ocular superurir
                  "flds3KaQIvoJveeFK": oclusalInferior, //Ocular Inferior
                  "fldZO4I3PzPUfleB7": frontalSinAlineador, //Frontal sin alineador
                  "fldFCAEckElCAkIJv": frontalConAlineador, //Frontal con alineador
                  "fldTNpCcgNchP922O": lateralDerecho, //Frontal con Lateral derecho
                  "fldkgLtSmqx7QO8pg": lateralIzquierdo, //Frontal con Lateral Izquierdo
                  "fldM0bsdXbONDPt04": panoramicaCraneo, //Frontal con Panoramica craneo
                  "fld0u2LXuzJYwV7PA": lateralCraneo, //Frontal con Lateral craneo
                  "fldpqvTUDPpVp7JnF": areaConsulta, //Frontal con Area motivo consulta
      }}],

          "typecast": true

      })
  });

  console.log(response);
  
  if (response.status === 200) {
    alertaSucces();
  } else {
      alertaError(); 
  }
      
  } catch (error) {
      console.log(error)      
  }  
}

return (
        <div className='wrapp-form-asesorias'>
            
            <Form 
            className={`form-asesorias${ocultaForm}`} 
            
            onFinish={registrandoAsesoria}
            
            >
            <div className='head-form'>
               <h2 className='head-master-form'>Agenda tu asesoría</h2>
               <p className='info-text'>Ingresa la información para agendar tu asesoría.</p>
            </div>
            {/* Wrapp form part checkbox and inputs */}
            <div 
            style={{
                width: '450px',
                marginBottom: '40px'

            }}>
            {/* El caso se encuentra en */}
            <div className={`wrapp-radio-group${changeclass}`}>
                <p className='text-head-group-radio'>El caso se encuentra</p>
                <Form.Item
                className={`wrapp-each-item-form ${ocultaForm}`} 
                name="ElcasoSeEncuentra"
                rules={[{ required: componentNoRequerid, message: 'Elije una opcion' }]}
                >
                <Radio.Group onChange={onChange}  value={value} options={seEncuentra}  className='text-radio'>        
                </Radio.Group>
                </Form.Item>   
            </div>
            {/* En bocan */}
            <div className={`wrapp-radio-group${changeclassEnboca}`}>
                <p className='text-head-group-radio'>El caso se encuentra en el alineador </p>
                <Form.Item
                className='wrapp-each-item-form'
                name="IndicaAlineador"
                rules={[{ required: inputAlineador, message: 'Ingrese el alineador' }]}
                >
                <Input className='input-text' placeholder="Indica el alineador" />
                </Form.Item>  
            </div>

            {/* Tipo de asesoria */}
            <div className={`wrapp-radio-group${changeclass}`}>
                <p className='text-head-group-radio'>Tipo de asesoría</p>
                <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
                <Form.Item
                className='wrapp-each-item-form'
                name="TipoDeAsesoria"
                rules={[{ required: inputTasesoria, message: 'Elije una opcion' }]}
                >
                    
                    <Radio.Group onChange={onChanges} isPaythisEvent={isPaythisEvent} value={values} options={tipoAsesoria} className='text-radio'>
                            
                    </Radio.Group>
                </Form.Item>
                
            </div>

            {/* Motivo de consulta */}
            <div className='wrapp-radio-group'>
            <p className='text-head-group-radio'>Motivo de consulta</p>
            <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
            <Form.Item
            className='wrapp-each-item-form'
            name="TextArea"
            rules={[{ required: true, message: 'Campo obligatorio' }]}
            >      
            <Input.TextArea  rows={5} placeholder="Indica el motivo de consulta" />
           
            </Form.Item>
            </div>
            {/* Necesita factura? */}
            <div className={`wrapp-radio-group${hideShowFactura}`}>
                <p className='text-head-group-radio'>¿Necesita facturar tu asesoría?</p>
                <Form.Item
                className='wrapp-each-item-form'
                name="NecesitaFactura"
                rules={[{ required: inputNecesitaFactura, message: 'Elije una opcion' }]}
                >  
                    <Radio.Group onChange={onFactura} value={values} options={factura} className='text-radio'>       
                    </Radio.Group>  
                </Form.Item>
                <p className='info-text-red'>*Si en el Portal B360 no tienes un Perfil Fiscal predeterminado, no se generará tu factura.</p>
               
                
            </div>
            </div>

            

            {/* Wrapp form part upload */}
            <div 
            style={{
            }}>
            {/* Subida de archivos */}
            <div className={`${activeUploadImgstart}`}>
            <p className='text-head-group-radio'>Subida de archivos</p>
            <div className='alert-upload-img'>
                <div>
                    <img src={alerticon} alt="" />
                </div>
                <div className='wrapp-text-alert-img-upload'>
                    <p className='info-text-strong'>Tus archivos deben ser recientes</p>
                    <p className='info-text'>Asegúrate de que los archivos sean actuales (que tengan menos de 7 días) para brindarte la mejor asesoría posible.</p>
                </div>
            
            </div>
            
            
            <div className='wrapp-upload-content'>
            
            <UploadFile URLimage={URLimage} />
            
            <Oclusalinferior URLOclusalinferior={URLOclusalinferior}  />
            <FrontalSinAlineador URLFrontalSinAlineador={URLFrontalSinAlineador} />
            <FrontalConAlineador URLFrontalConAlineador={URLFrontalConAlineador} />
            <LateralDerechaOclusion URLLateralDerechaOclusion={URLLateralDerechaOclusion} />
            <LateralizquierdaOclusion URLLateralizquierdaOclusion={URLLateralizquierdaOclusion} />
            <PanoramicaCraneo URLPanoramicaCraneo={URLPanoramicaCraneo} />
            <LateralCraneo URLLateralCraneo={URLLateralCraneo} />
            <AreaMotivoConsulta URLAreaMotivoConsulta={URLAreaMotivoConsulta} />
            </div>
            

            </div>
            </div>
            <Form.Item >
                <Button 
                className='btn-siguiente'
                type="primary" 
                htmlType="submit" 
                loading={loadings[0] } 
                
                >
                    Siguiente
                </Button>
            </Form.Item>

            </Form>

          
            <div className={`${muestraCalendly}`}>
            <CalendlyOneWrapp />
            </div>
          
         


            
        </div>

        
    )
}

export { FormAsesorias };
