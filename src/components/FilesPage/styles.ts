import styled from 'styled-components'
export const Container = styled.div`

@media (max-width: 600px) {
    .filesPage {
        flex-direction: column !important;
    }
    .left{
        width: 70% !important;
        padding: 2rem 0 !important;
    }
}
    h1,p {
        color: white;
    }
    .filesPage{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100vw;
    }
    hr{
        width: 60%;
        margin: 1rem 0;
    }
    .left{
        width: 20vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gray-400);
        flex-direction: column;
        border-radius: 12px;
        padding: 1rem;
    }
    .left>img{
        max-width: 100%;
    }
    .right{
        background: var(--gray-740);
        width: 80vw;
    }
    .storage{
        display: grid;
        padding: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(10px, 40px));
    }
    .storageUnity{
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: var(--green-storage);
        margin: 6px;
    }
`