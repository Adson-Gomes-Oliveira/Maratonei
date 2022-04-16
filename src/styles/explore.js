import styled from 'styled-components';

export const ExploreStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ExploreContentStyled = styled.div`
  display: flex;
`;

export const ShowSectionStyled = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  padding: 0 var(--sizing-3x);
  width: 75%;
`;

export const SearchLabel = styled.label`
  display: flex;
  margin: var(--sizing-5x) 0;

  div {
    background-color: var(--yellow-project-color);
    border-radius: 0.3rem;
    border: 0.15rem solid white;
    display: flex;
    justify-content: space-between;
    width: 40%;

    input::placeholder {
      font-family: 'Bebas', sans-serif;
      font-size: var(--sizing-3x);
      padding: 0 var(--sizing-2x);
    }

    input:focus {
      outline: none;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: var(--black-project-color);
  border-radius: 0.3rem 0 0 0.3rem;
  border: none;
  color: white;
  font-family: 'Arial', sans-serif;
  font-size: var(--sizing-3x);
  height: 2.3rem;
  padding: 0 var(--sizing-1x);
  width: 90%;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  width: 10%;
  cursor: pointer;
  
  img {
    width: var(--sizing-5x);
  }
`;
