import { createGlobalStyle } from 'styled-components';
import poppinsLightWoff from './assets/fonts/poppinsLight.woff';
import poppinsLightWoff2 from './assets/fonts/poppinsLight.woff2';
import poppinsBoldWoff from './assets/fonts/poppinsBold.woff';
import poppinsBoldWoff2 from './assets/fonts/poppinsBold.woff2';

export const GlobalStyle = createGlobalStyle`
        html {
                box-sizing: border-box;
                font-family: 'poppinsLight';
        }

	@font-face {
		font-family: 'poppinsLight';
		src: local('poppinsLight'), local('poppinsLight'),
		url(${poppinsLightWoff2}) format('woff2'),
		url(${poppinsLightWoff}) format('woff');
	}

        @font-face {
                font-family: 'poppinsBold';
		src: local('poppinsBold'), local('poppinsBold'),
		url(${poppinsBoldWoff2}) format('woff2'),
		url(${poppinsBoldWoff}) format('woff');
        }

        h1, h2, h3, h4 {
                font-family: 'poppinsBold';
                line-height: 1;
        }

        p {
                font-family: 'poppinsLight';
                line-height: 1.5;
        }			
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                background: #fefefe;
                height: 100vh;
                margin: 0 auto;
                overscroll-behavior: none;
                width: 100%;
        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
`;
