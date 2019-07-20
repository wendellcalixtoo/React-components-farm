import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920;
        /* background: #FFFFFF; */
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;

    }

    h1{
        color: #7159c1;
        font: Roboto, sans-serif;
        margin: 5px;
    }

    .container{
        margin: 5px;
        min-width: 300px;

        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #fff;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;
        flex: 1;
    }

    .components{
        display: flex;
        margin:20px;
    }
`;
