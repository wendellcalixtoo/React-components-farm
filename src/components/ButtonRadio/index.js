import React from 'react';

import { ButtonRadioStyled } from './styles';

export default function ButtonRadio(){
    return (
        <>
            <ButtonRadioStyled>
                <div className="title"><label> De acordo com o quadro "Brasil mulambo" do Jornal Jornal o menino Charlinho gostava mais de: </label></div>

                <div className="radiobutton"><label> <input type="radio" defaultValue="option2" id="optionsRadios2" name="optionsRadios" /> O menino Charlinho gosta mais de estudar </label></div>
                <div className="radiobutton"><label> <input type="radio" defaultValue="option2" id="optionsRadios2" name="optionsRadios" /> O menino Charlinho gosta mais de batata </label></div>
                <div className="radiobutton"><label> <input type="radio" defaultValue="option2" id="optionsRadios2" name="optionsRadios" /> O menino Charlinho gosta mais de batata e gosta mais de estudar também </label></div>
            </ButtonRadioStyled>
        </>
    )
}