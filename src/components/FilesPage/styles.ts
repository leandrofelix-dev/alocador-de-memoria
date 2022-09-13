import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  /* background: blue; */
  flex-direction: column;
  overflow-x: hidden;

  @media (max-width: 600px) {
    .filesPage {
      flex-direction: column !important;
    }
    .left {
      width: 70% !important;
      padding: 2rem 0 !important;
    }
  }
  h1,
  p {
    color: white;
  }
  .filesPage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
  }
  hr {
    width: 60%;
    margin: 1rem 0;
  }
  /* ================ */

  input[type="file"] {
    background: var(--gray-400);
    border-bottom: 2px solid var(--purple);
    border-radius: 4px 4px 0 0;
    padding: .4rem 1rem;
    color: var(--white);
  }
  .inputFile{
    background-color: var(--gray-600);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    padding: .4rem 2rem;
  }
  .inputFile>i{
    color: var(--gray-200);
    font-size: 2rem;
    margin-right: 1rem;
  }
  .inputContainer>label>i {
    color: var(--gray-200);
  }

  /* ================= */

  .left {
    color: var(--purple);
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
  .left > img {
    max-width: 100%;
  }
  .right {
    background: var(--gray-740);
    width: 80vw;
  }
  .storage {
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(10px, 40px));
  }

  .storageUnity {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--gray-400);
    margin: 6px;
  }

  .active {
    background: var(--green-storage);
  }
`;
