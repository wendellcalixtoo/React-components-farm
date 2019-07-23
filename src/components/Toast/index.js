import React, { Component } from 'react';

import { toast } from 'react-toastify';

import { 
        ToastButtonSuccessStyled,
        ToastButtonInfoStyled,
        ToastButtonWarningStyled,
        ToastButtonDangerStyled,
         } from './styles';

export default class ToastButton extends Component {

    handleToastSuccess = event => {
        toast.success('Toast SUCCESS')
    }

    handleToastInfo = event => {
        toast.info('Toast INFO')
    }

    handleToastWarning = event => {
        toast.warn('Toast WARNING')
    }

    handleToastDanger = event => {
        toast.error('Toast ERROR')
    }

  render() {
    return(
        <>
  
        <ToastButtonSuccessStyled>
        <button type="button" onClick={this.handleToastSuccess}>Success</button>
        </ToastButtonSuccessStyled>

        <ToastButtonInfoStyled>
        <button type="button" onClick={this.handleToastInfo}>Info</button>
        </ToastButtonInfoStyled>

        <ToastButtonWarningStyled>
        <button type="button" onClick={this.handleToastWarning}>Warning</button>
        </ToastButtonWarningStyled>

        <ToastButtonDangerStyled>
        <button type="button" onClick={this.handleToastDanger}>Danger</button>
        </ToastButtonDangerStyled>

        </>
    );
  }
}
