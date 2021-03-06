import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root { // css variables
        --green: #33CC95;
        --red: #E62E4D;
        --blue: #5429CC;

        --light-blue: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;
        
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // the default font-size is 16px
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 93.75% of 16px this 15px 
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 87.5% of 16px this 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // hack to make browsers that use chrome engine (webkit) to render fonts smoother (on the level of pixel instead of subpixel) 
    }

    body, input, textarea, button { // by default input, textarea and button do not inherit the body's font
        font-family: 'Poppins', sans-serif;
        font-weight: 400; // html's default font weight is usually 500
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }    

    [disabled] { // all components that are disabled have a lighter colour and the not-allowed cursor
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`