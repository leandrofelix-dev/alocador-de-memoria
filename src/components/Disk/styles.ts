import styled from 'styled-components'
export const Container = styled.div`
    width: 306px;
    height: 430px;
    background: var(--gray-400);    
    border-radius: 18px;
    color: var(--white);

    a {
        text-decoration: none;
    }
    .content {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        justify-content: center; //Alinhamento na horizontal
        align-items: center; //Alinhamento na vertical
    }
    .content>hr{
        width: 72%;
        background: var(--purple);
    }
    .content>img{
        width: 80%;
    }
`