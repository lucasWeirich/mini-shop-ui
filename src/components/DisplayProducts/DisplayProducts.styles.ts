import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
`

export const Display = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 270px);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 270px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 270px);
  }
`

export const NoProductFound = styled.span`
  font-size: 30px;
  color: #777;
  padding-top: 50px;
  text-align: center;
`