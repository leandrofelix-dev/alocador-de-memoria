import styled from 'styled-components'
export const Container = styled.div`

@media (min-width:640px) {
    ul{
        display: flex;
        flex-direction: column;
    }
}
    ul {
        flex-direction: row;
        max-width: 100vw;
    }

    li {
        /* display: none; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }
    li>div{
        padding: 1rem;
    }
    .insertButtonBox{
        display: flex;
        justify-content: center;
        
    }
    .insertButton{
        border: none;
        background: none;
    }
    .insertButton > i{
        font-size: 64px;
        color: var(--gray-200);
    }

`