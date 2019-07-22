import styled from 'styled-components';
import { darken } from 'polished';

export const ClientSearchbarStyled = styled.ul`

.search-button {
    color: #ffffff;
    font: 13px;
    background: #1ab394;
    padding: 6px 12px;
    height: 35px;
    width: 82.29px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 0;

    &:hover {
        background: ${darken(0.03, "#1ab394")};
    }

}

  .search-text {
    height: 35px;
    width: 282.41;
    font-size: 14px;
    padding-bottom: 6px;
    padding-top: 6px;

    &:hover {
        border-color: #1ab394;
        shadow: none;
    }
}

`;

