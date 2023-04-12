import styled from "styled-components";
import Container from "../components/Container/Container";
import usePageTitle from "../hooks/usePageTitle"
import LayoutDefault from "../layouts/default.layout";
import { Link } from "react-router-dom";

export default function NotFound() {

  usePageTitle('Not Found');

  return <LayoutDefault>
    <Wrapper>
      <Container>
        <h1>Not Found - 404</h1>

        <Link to='/'>Continue navegando...</Link>
      </Container>
    </Wrapper>
  </LayoutDefault>
}

const Wrapper = styled.div`  
  &>div {
    min-height: calc(100vh - 111px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  & a {
    text-decoration: none;
    padding: 4px 20px;
    background: var(--colorBgEmphasis);
    color: var(--colorEmphasis);
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      background: var(--colorEmphasis);
      box-shadow: 4px 4px 10px -4px var(--colorEmphasis);
      color: #fff;
    }
  }
`