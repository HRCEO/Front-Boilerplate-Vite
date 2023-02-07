import React from 'react';
import CustomSelectButton from "../atoms/CustomSelectButton/CustomSelectButton";

interface countMolecules {
    add: any,
    discount: any
}


const CountMolecules = ({add,discount}:countMolecules) => {
    return (
        <>
            <CustomSelectButton label={'add'} event={add} />
            <CustomSelectButton label={'discount'} event={discount} />
        </>
    )
};

export default CountMolecules;