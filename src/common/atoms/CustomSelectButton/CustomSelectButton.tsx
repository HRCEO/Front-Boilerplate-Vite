import React from 'react';
import { Button } from 'primereact/button';

interface CustomSelectButton {
    label: string,
    event: any
}

const CustomSelectButton:React.ElementType = ({label,event}:CustomSelectButton) => {
    return (
        <Button label={label} onClick={event}/>
    )
}


export default CustomSelectButton;
