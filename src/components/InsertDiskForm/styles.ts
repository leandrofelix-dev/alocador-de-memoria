import styled from 'styled-components'

export const Container = styled.form`

@media (max-width: 664px){
    .formPopUp{
        flex-direction: column;
        min-width: 60vw;
        max-width: 70vw;
    }
    .separator{
        display: none;
    }
    .formPopUp{
        display: flex;
        flex-direction: column-reverse;
    }
    .formPopUp__box{
        flex-direction: column;
    }
    .formPopUp__closeButton{
        text-align: right;
    }
    .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .left>img{
        max-width: 80%;
    }
}
h1{
    text-align: center
}
.formPopUp{
    padding: 1.2rem;
    background: var(--gray-400);
    border-radius: 8px;
    display: flex;
    color: var(--white);
    transition: all .3s;
}
.formPopUp__closeButton{
    /* background: red; */
}
.formPopUp__box{
    display: flex;
    align-items: center;
}
.left{
    /* background: purple; */
}
.right{
    /* background: green; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.right>h1{
    margin-bottom: 1rem;
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
    height: 90%;
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
input[type="radio"]{
    all: unset;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 4px;
    background: var(--gray-800);
    border: 2px solid var(--gray-400);
    margin: .2rem .4rem;
}
input:checked{
    background-color: var(--purple);
    background-image: url("../../assets/images/checked.png");
    width: 18px;
    height: 18px;
    border-color: var(--gray-800);
}
.contigua,
.indexada,
.encadeada{
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* background: green; */
    width: 100%;
}
.checkbox{
    margin: 1rem 0;
    /* background: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

`
