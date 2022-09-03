import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


:root {
    --white: #FDFDFD;
    --gray-200: #8d8d99;
    --gray-400: #202024;
    --gray-700: #121214;
    --purple: #6833E4;
    --green: #00875f;
    --green-storage: #04D361;
}


* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    list-style: none;
}

body{
  background: var(--gray-700);

}
hr{
  border: 1px solid var(--purple);
}
.react-modal-overlay { //Fora do modal
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
  
  .react-modal-content { //Modal
    width: 100%;
    max-width: 80%;
    background: var(--background);
    padding: 3rem;
    position: fixed;
    border-radius: 0.24rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

