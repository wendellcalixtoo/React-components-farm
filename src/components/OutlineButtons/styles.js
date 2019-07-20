import styled from "styled-components";
import { darken } from "polished";

export const ButtonDefaultStyled = styled.ul`
  button {
    background: #fff;
    color: #676a6c;
    border: 0;
    border-radius: 3px;
    border-color: #676a6c;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #fff ${darken(0.03, "#FFFFFF")};
    }
  }
`;

export const ButtonSucessStyled = styled.ul`
  button {
    background: #fff;
    color: #1c84c6;
    border: 0;
    border-radius: 3px;
    border-color: #1c84c6;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #1c84c6;
      color: #fff;
    }
  }
`;

export const ButtonPrimaryStyled = styled.ul`
  button {
    background: #fff;
    color: #1ab394;
    border: 0;
    border-radius: 3px;
    border-color: #1ab394;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #1ab394;
      color: #fff;
    }
  }
`;

export const ButtonInfoStyled = styled.ul`
  button {
    background: #fff;
    color: #23c6c8;
    border: 0;
    border-radius: 3px;
    border-color: #23c6c8;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #23c6c8;
      color: #fff;
    }
  }
`;

export const ButtonWarningStyled = styled.ul`
  button {
    background: #fff;
    color: #f8ac59;
    border: 0;
    border-radius: 3px;
    border-color: #f8ac59;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #f8ac59;
      color: #fff;
    }
  }
`;

export const ButtonDangerStyled = styled.ul`
  button {
    background: #fff;
    color: #ed5565;
    border: 0;
    border-radius: 3px;
    border-color: #ed5565;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #ed5565;
      color: #fff;
    }
  }
`;

export const ButtonLinkStyled = styled.ul`
  button {
    background: #fff;
    color: #676a6c;
    border: 0;
    border-radius: 3px;
    border-color: #676a6c;
    border-style: solid;
    border-width: 1px;
    transition-duration: 0.5s;
    font-size: inherit;
    min-width: 80px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: #fff;
      color: #23c6c8;
    }
  }
`;
