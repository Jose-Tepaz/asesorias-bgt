import React from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {useState} from 'react';

function UploadFile() {

    return (
        <Upload.Dragger >
            <Button>Click</Button>
        </Upload.Dragger>
    )
    
}
export { UploadFile };