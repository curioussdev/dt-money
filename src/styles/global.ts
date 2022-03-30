import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --blue: #5429cc;
        
        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #ffffff;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    // font-size: 16px (padrão de Desktop)

    html{ // adapta o tamanho da fonte, indepente da tela do user
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media(max-width: 720px){
            font-size: 87.5%; // 14px 
        }
    }


    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; // hack para melhor leitura de fontes nos browsers
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;