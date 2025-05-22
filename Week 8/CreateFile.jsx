import React from 'react';
import { MyButton } from './MyButton';
import { TextField } from './TextField';


import './CreateFile.css';
import './MyButton.css';
import './TextField.css';

export const CreateFile = () => {
  return (

    <div className ='CreateFile'>
        <div className= 'Input'>
            <div className='ImageInput'>
                <h2>Image *</h2>
                <input type='file' placeholder='Drag and drop your file here'/>
                <MyButton label='My PC'/> 
            </div>
            <div className='TitleInput'>
                <h2>Title *</h2>
                <TextField className='placeholder' placeholder='text'/>
                <p>*Please enter no more than 20 characters</p>
            </div>
            <div className='DescriptionInput'>
                <h2>Description</h2>
                <TextField className='placeholder' placeholder='Description'/>
                <p>*Please enter no more than 200 characters</p>
            </div>
            <div className="submit"><MyButton  label='Submit Post'/></div>
            
        </div>
        
        
    </div>
    
    
  );
}

export default CreateFile;