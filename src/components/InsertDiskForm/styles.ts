import styled from 'styled-components'

export const Container = styled.form`

@media (max-width: 600px){
    .formPopUp{
        flex-direction: column;
    }
    .separator{
        display: none;
    }
}
    .formPopUp{
        background: var(--gray-400);
        border-radius: 8px;
        display: flex;
        color: var(--white);
        transition: all .3s;
        /* padding: 1rem 1.2rem 0 .4rem; */
    }
    .left{
        /* background: purple; */
    }
    .right{
        /* background: green; */
        padding: 1rem;
    }

    .left>h1{
        text-align: center
    }
    .left>img{
        /* width: 100%; */
    }
    .inputText{
        background: var(--gray-700);
        border: none;
        border-bottom: 2px solid var(--purple);
        padding: .4rem 1rem;
        color: var(--white);
        border-radius: 8px 8px 0 0;
    }

    .separator{
        width: 2px;
        height: 43vh;
        background-color: #2D2D2D;
        margin: 0 1rem;
    }
    .sendButton{
        border: 1.4px solid var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .4rem 0;
        border-radius: 8px;
        transition: all .4s;
        color: var(--green);
        cursor: pointer;
        margin-top: 1rem;
    }
    .sendButton>*{
        padding: 0 4px;
    }
    .sendButton:hover{
        background: var(--green);
        color: var(--white);
    }
    .sendButton>i{
        font-size: 22px;
    }

`
