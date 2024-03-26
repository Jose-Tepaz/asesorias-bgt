
import React, { useEffect } from 'react';
import './FormAsesorias.css'
import { Radio, Form, Button, Input, } from 'antd';
import { UploadFile } from './UploadFile';
import { Testupload } from './Testupload';
import {useState} from 'react';
import alerticon from './alert-icon.svg';
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

    //Estado que muestra u oculta el area  de factura
    const [facturaIs, setFacturaIs] = useState(null);

     //Estado que envia el dato a Airtable si necesita o no factura
     const [facturaNeed, setFacturaNeed] = useState(false);

    //Ya romo su primera acesoría 
    const [firstCallStatus, setFirstCallStatus] = useState(null);

    // Ya tiene una planificación
    const [tratmentStatus, setTratmentStatus] = useState(null);


    
    //array para setear tipoAsesoria
    const [tipoAsesoriaArr, serTipoAsesoriaArr] = useState("");

    //Recibe los valores del formulario
    const [datosForm, setDatosForm] = useState('https://res.cloudinary.com/dxnm9opuh/image/upload/v1710900026/descarga_zilwpk.png');

console.log(datosForm);

    //REcibiendo URL de imagenes de los componentes hijos
    const URLimage = (imagenURL) => {
      console.log(imagenURL);
      console.log("aqui esta");
      setDatosForm({uno:imagenURL})

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
    //?treatment_id=1&treatment_status=true&admin_id=1&first_call=true
    //?463?46?0?1
    //0: "?treatment_id=1"
    //1: "treatment_status_id=3"
    //2: "admin_id=1"
    //3: "first_call=true"
    
    useEffect (() => {

        const getUrl= window.location.search;
        const separateUrl = getUrl.split("&");
        console.log(separateUrl)

        //si ya existe una planificación
        if (separateUrl[1] == "treatment_status=false" ) {
            //console.log(window.location.search);
            console.log("Si funciona la URL");
            console.log(window.location);
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

        } else if (separateUrl[3] == "first_call=true" ){
          
          setInputNecesitaFactura(true);
          setFirstCallStatus(true)

        }else {
          setFacturaIs("mostrar");
          setComponentNoRequerid(true);
          setInputTasesoria(true);
          setInputNecesitaFactura(false);

          setTratmentStatus(true)
          setFirstCallStatus(false)
        
    }
        
    });

    //Oculta o muestra el area del form
    let changeclass = componentDisabled1 != null ? ' none-div' : '';
    let changeclassEnboca = casoEnBoca == null ? ' none-div' : '';
    let hideShowFactura = facturaIs != null ? ' none-div' : '';
    

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
      
    };

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
          alertaSucces();
          return newLoadings;         
        });
      }, 2000);
    };


 //Alertas
//modal de confirmación
const alertaSucces=()=>{
  Swal.fire({
  title: "Solicitaste tu cotización",
  html: "Te enviaremos una copia de tu cotización a tu correo electrónico y nos comunicaremos contigo en un plazo de 3 días hábiles para confirmar todos los detalles.",
  imageUrl: "https://cdn.shopify.com/s/files/1/0633/1459/1884/files/icon-done.svg?v=1706909092",
imageWidth: 60,
imageHeight: 60,
showCloseButton: true,
confirmButtonText: `Volver al inicio`,
  customClass: {
      popup: 'popAlert',
      title: 'titlePopup',
      htmlContainer: 'textpopup',
      confirmButton: 'clear-cart',
      closeButton: 'clodeBtnBtn'

  }
}).then((result) => {
  
  window.location.reload();

});
}

//modal de error
const alertaError=()=>{
  Swal.fire({
  title: "No pudimos solicitar tu cotización",
  html: "Lo sentimos, pero algo ha salido mal al procesar tu solicitud. Por favor, verifica tu conexión a internet e inténtalo de nuevo.",
  imageUrl: "https://cdn.shopify.com/s/files/1/0633/1459/1884/files/icon-error.svg?v=1706911874",
imageWidth: 60,
imageHeight: 60,
showCloseButton: true,
confirmButtonText: `Volver a intentarlo`,
  customClass: {
      popup: 'popAlert',
      confirmButton: 'btn-siguiente',
      title: 'titlePopup',
      htmlContainer: 'textpopup',
      closeButton: 'clodeBtnBtn'

  }
}).then((result) => {
  
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
                  "fldvqEwaivJsemQI2": datosForm.uno, //Ocular superurir
                  "fldyc9cZ56SFyhx9F": firstCallStatus, //Tomo asesoría gratutita?
                  "fldLX3ThXbADUNWVK": facturaNeed, //Necesita factura
                  
              }
          }],
          "typecast": true
      })
  });

  console.log(response);
  
  if (response.status === 200) {
    enterLoading(0);  
  } else {
      alertaError(); 
  }
      
  } catch (error) {
      console.log(error)      
  }  
}

return (
        <div className='wrapp-form-asesorias'>
            <div>
               <h2 className='head-master-form'>Agenda tu asesoría</h2>
               <p className='info-text'>Ingresa la información para agendar tu asesoría.</p>
            </div>
            <Form 
            className='form-asesorias'
            
            onFinish={registrandoAsesoria}
            
            >
            {/* Wrapp form part checkbox and inputs */}
            <div 
            style={{
                width: '450px',

            }}>
            {/* El caso se encuentra en */}
            <div className={`wrapp-radio-group${changeclass}`}>
                <p className='text-head-group-radio'>El caso se encuentra</p>
                <Form.Item
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
                name="IndicaAlineador"
                
                rules={[{ required: inputAlineador, message: 'Ingrese el alineador' }]}
                >
                <Input placeholder="Indica el alineador" />
                </Form.Item>  
            </div>

            {/* Tipo de asesoria */}
            <div className={`wrapp-radio-group${changeclass}`}>
                <p className='text-head-group-radio'>Tipo de asesoría</p>
                <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
                <Form.Item
                name="TipoDeAsesoria"
                rules={[{ required: inputTasesoria, message: 'Elije una opcion' }]}
                >
                    
                    <Radio.Group onChange={onChanges} value={values} options={tipoAsesoria} className='text-radio'>
                            
                    </Radio.Group>
                </Form.Item>
                
            </div>

            {/* Motivo de consulta */}
            <div className='wrapp-radio-group'>
            <p className='text-head-group-radio'>Motivo de consulta</p>
            <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
            <Form.Item
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
                name="NecesitaFactura"
                rules={[{ required: inputNecesitaFactura, message: 'Elije una opcion' }]}
                >  
                    <Radio.Group onChange={onFactura} value={values} options={factura} className='text-radio'>
                            
                    </Radio.Group>
                </Form.Item>
                
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
            
            <Form.Item
            
            >
            <div className='wrapp-upload-content'>
            <UploadFile URLimage={URLimage} />
            <UploadFile />
            <UploadFile />
            <UploadFile />
            </div>
            </Form.Item>


            </div>
            </div>
            
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button 
                type="primary" 
                htmlType="submit" 
                loading={loadings[0]} 
                
                >
                    Siguiente
                </Button>
            </Form.Item>

            </Form>                      
        </div>
    )
}

export { FormAsesorias };
