import styled from "styled-components";

export const Container = styled.div<{ display: string }>`
  width: 306px;
  height: 430px;
  background: var(--gray-400);
  border-radius: 18px;
  color: var(--white);
  display: ${(props) => (props.display === "" ? "block" : "none")};

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
    cursor: pointer;
  }
  .content > hr {
    width: 72%;
    background: var(--purple);
  }
  .content > img {
    width: 80%;
  }

  .buttonTrash {
    background: transparent;
    font-size: 1.25rem;
    border: 0;
    color: var(--white);
    display: block;
    justify-content: end;
    text-align: end;
    padding: 2px;

    line-height: 0;
    border-radius: 2px;
  }

  .buttonTrash:hover {
    color: var(--red-500);
  }
`;
