import styled from "styled-components";
import { darken } from "polished";

export const ButtonDefaultStyled = styled.ul`
  button {
    background: #ffffff;
    color: #676a6c;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#FFFFFF")};
    }
  }
`;

export const ButtonSucessStyled = styled.ul`
  button {
    justify-content: space-between;

    background: #1c84c6;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#1C84C6")};
    }
  }
`;

export const ButtonPrimaryStyled = styled.ul`
  button {
    background: #1ab394;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#1AB394")};
    }
  }
`;

export const ButtonInfoStyled = styled.ul`
  button {
    background: #23c6c8;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#23c6c8")};
    }
  }
`;

export const ButtonWarningStyled = styled.ul`
  button {
    background: #f8ac59;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#F8AC59")};
    }
  }
`;

export const ButtonDangerStyled = styled.ul`
  button {
    background: #ed5565;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#ED5565")};
    }
  }
`;

export const ButtonLinkStyled = styled.ul`
  button {
    background: #ffffff;
    color: #23c6c8;
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    min-width: 120px;
    font: 13px;

    margin: 0px 2.5px 5px;
    padding: 6px 12px;

    &:hover {
      background: ${darken(0.03, "#FFFFFF")};
    }
  }
`;
