
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
    //setea valores en radio buttons
    const seEncuentra = [
        {
          label: 'En boca',
          value: 'en-boca',
        },
        {
          label: 'No está en boca',
          value: 'no-esta-en-boca',
        },
      ];

    const [value, setValue] = useState(1);
    const [values, setValues] = useState(1);
    //cambia es estado del campo requerido
    const [componentNoRequerid, setComponentNoRequerid] = useState(false);
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
    
    //array para setear tipoAsesoria
    const [tipoAsesoriaArr, serTipoAsesoriaArr] = useState("");

    //Recibe los valores del formulario
    const [datosForm, setDatosForm] = useState([{uno:"uno", dos:"dos"}]);

console.log(datosForm);

    //REcibiendo URL de imagenes de los componentes hijos
    const URLimage = (imagenURL) => {
      console.log(imagenURL);
      console.log("aqui esta");
      setDatosForm({uno:imagenURL})

    }


    //setea valores en radio buttons
    const tipoAsesoria = [
        {
          label: 'Asesoría clínica',
          value: tipoAsesoriaArr + "-" + "asesoria-clinica",
        },
        {
          label: 'Asesoría de planificación',
          value: tipoAsesoriaArr + "-" + "planificacion",
        },
      ];
    
    //Condicion segun datos de URL
    useEffect (() => {
        if (window.location.search === "?treatment_id?admin_id?tax_data_id?first_call") {
            //console.log(window.location.search);
            console.log("Si se logro");
           //const activeModuleForm = setComponentDisabled(true);
            //setActive1();
            setComponentNoRequerid(true);
            setComponentDisabled1("none-div");
        };
    });

    //Oculta o muestra el area del form
    let changeclass = componentDisabled1 != null ? ' none-div' : '';
    let changeclassEnboca = casoEnBoca == null ? ' none-div' : '';
    

  //On change group el caso se encuentra
    const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    if (e.target.value == "en-boca"){
        setCasoEnBoca(e.target.value);
    } else {
        setCasoEnBoca(null);
    }
    serTipoAsesoriaArr(e.target.value);
    setActiveUploadImg(null)
    };

//On change TIpo de asesoria
    const onChanges = (e) => {
      console.log('radio checked', e.target.value);
      setValues(e.target.value);
      
      if (e.target.value === "en-boca-asesoria-clinica") {
        
        setActiveUploadImg("activemos")
      } else if (e.target.value === "en-boca-planificacion") {
        setActiveUploadImg("activemos")
        
      }else if (e.target.value === "no-esta-en-boca-asesoria-clinica") {
        setActiveUploadImg(null)
        
      }else if (e.target.value === "no-esta-en-boca-planificacion") {
        
        setActiveUploadImg(null)
      }
    };
    let activeUploadImgstart = activeUploadImg == null ? ' none-div' : '';

  
 

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
const registrandoAsesoria = (e) => {
      //const convert = JSON.stringify(e)
//console.log(convert);
console.log(e.TextArea);
console.log(datosForm.uno)
console.log("ya estamos aca");

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
                name="El caso se encuentra"
                rules={[{ required: componentNoRequerid, message: 'Elije una opcion' }]}
                >
                <Radio.Group onChange={onChange}  value={value} options={seEncuentra} className='text-radio'>        
                </Radio.Group>
                </Form.Item>   
            </div>
            {/* En bocan */}
            <div className={`wrapp-radio-group${changeclassEnboca}`}>
                <p className='text-head-group-radio'>El caso se encuentra en el alineador </p>
                <Form.Item
                name="Indica alineador"
                >
                <Input placeholder="Indica el alineador" />
                </Form.Item>  
            </div>

            {/* Tipo de asesoria */}
            <div className='wrapp-radio-group'>
                <p className='text-head-group-radio'>Tipo de asesoría</p>
                <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
                <Form.Item
                name="Tipo de asesoría"
                rules={[{ required: true, message: 'Elije una opcion' }]}
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
                onClick={() => enterLoading(0)}
                >
                    Siguiente
                </Button>
            </Form.Item>

            </Form>
                      
        </div>
    )
}

export { FormAsesorias };
