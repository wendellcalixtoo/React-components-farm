import styled from "styled-components";
import { darken } from "polished";



export const ToastButtonSuccessStyled = styled.ul`
  button {
    justify-content: space-between;

    background: #07c50e;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#07c50e")};
    }
  }
`;


export const ToastButtonInfoStyled = styled.ul`
  button {
    background: #41a3e2;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#41a3e2")};
    }
  }
`;

export const ToastButtonWarningStyled = styled.ul`
  button {
    background: #f3ca13;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#f3ca13")};
    }
  }
`;

export const ToastButtonDangerStyled = styled.ul`
  button {
    background: #e85642;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#e85642")};
    }
  }
`;

