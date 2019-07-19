import React from 'react';

import { ButtonDefaultStyled, ButtonPrimaryStyled,
    ButtonSucessStyled, ButtonInfoStyled, ButtonWarningStyled, ButtonDangerStyled,
    ButtonLinkStyled } from './styles';

export default function OutlineButton(){
    return(
        <>
            <ButtonDefaultStyled>
                <button type="button">Default</button>
            </ButtonDefaultStyled>

            <ButtonPrimaryStyled>
                <button type="button">Primary</button>
            </ButtonPrimaryStyled>

            <ButtonSucessStyled>
                <button type="button">Sucess</button>
            </ButtonSucessStyled>

            <ButtonInfoStyled>
                <button type="button">Info</button>
            </ButtonInfoStyled>

            <ButtonWarningStyled>
                <button type="button">Warning</button>
            </ButtonWarningStyled>

            <ButtonDangerStyled>
                <button type="button">Danger</button>
            </ButtonDangerStyled>

            <ButtonLinkStyled>
                <button type="button">Link</button>
            </ButtonLinkStyled>
        </>
    );
}