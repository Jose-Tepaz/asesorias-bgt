
import React, { useEffect } from 'react';
import './FormAsesorias.css'
import { Radio, Form, Button, Input } from 'antd';
import { UploadFile } from './UploadFile';
import { Testupload } from './Testupload';
import {useState} from 'react';


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


function FormAsesorias () {
    const [value, setValue] = useState(1);
    const [values, setValues] = useState(1);
    //cambia es estado del campo requerido
    const [componentNoRequerid, setComponentNoRequerid] = useState(false);
    //muestra el grupo de opciones
    const [componentDisabled1, setComponentDisabled1] = useState(null);
    
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

    
    let changeclass = componentDisabled1 != null ? ' none-div' : '';

    const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    };

  const onChanges = (e) => {
    console.log('radio checked', e.target.value);
    setValues(e.target.value);
  };

    return (
        <div className='wrapp-form-asesorias'>
            <div>
            <h2 className='head-master-form'>Agenda tu asesoría</h2>
            <p className='info-text'>Ingresa la información para agendar tu asesoría.</p>

            </div>
            <Form 
            className='form-asesorias'
            onFinish={(values) => {
                console.log({values});
            }}
            
            >
            <div className={`wrapp-radio-group${changeclass}`}>
                <p className='text-head-group-radio'>El caso se encuentra</p>
                <Form.Item
                name="Radio"
                rules={[{ required: componentNoRequerid, message: 'Elije una opcion' }]}
                >
                <Radio.Group onChange={onChange} value={value} options={seEncuentra} className='text-radio'>        
                </Radio.Group>
                </Form.Item>   
            </div>
            <div className='wrapp-radio-group'>
                <p className='text-head-group-radio'>Tipo de asesoría</p>
                <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
                <Form.Item
                name="Radios"
                rules={[{ required: true, message: 'Elije una opcion' }]}
                >
                    <Radio.Group onChange={onChanges} value={values} >
                        <Radio className='text-radio' value={"enbocas"}>Asesoría clínica</Radio>
                        <Radio className='text-radio' value={"noenbocas"}>Asesoría de planificación</Radio>      
                    </Radio.Group>
                </Form.Item>
                
            </div>

            <div className='wrapp-radio-group'>
            <p className='text-head-group-radio'>Tipo de asesoría</p>
            <p className='info-text'>Selecciona la asesoría que mejor se adapte al motivo de consulta.</p>
            <Form.Item
            name="TextArea"
            rules={[{ required: true, message: 'Campo obligatorio' }]}
            >      
            <Input.TextArea placeholder="Indica el motivo de consulta" />
            </Form.Item>
            </div>
            
            <div>
            <p className='text-head-group-radio'>Subida de archivos</p>
            <p className='info-text'>Sube los siguientes archivos para tu asesoría.</p>
            <p className='info-text'>Por favor, asegúrate de que los archivos sean actuales (que tengan menos de 7 días) para brindarte la mejor asesoría posible.</p>
            
            <Form.Item>
            <div className='wrapp-upload-content'>
            <UploadFile />
            <UploadFile />
            <UploadFile />
            <UploadFile />
            </div>
            </Form.Item>

            
            
            </div>
            
            

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

            </Form>
            
            
        </div>
    )
}

export { FormAsesorias };
