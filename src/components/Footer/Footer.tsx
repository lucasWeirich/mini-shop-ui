import Container from "../Container/Container";
import { Icon } from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import styled from "styled-components";

export default function Footer() {
  return <Wrapper>
    <Container>
      <Text className="--txt-emphasis">
        <span>direitos reservados - desenvolvido com</span>
        <Icon
          path={mdiHeart}
          color="#fff"
          size="15px"
        />
      </Text>
    </Container>
  </Wrapper>
}

const Wrapper = styled.footer`
  background-color: var(--colorBgEmphasis);
  padding: 5px 0;
`

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & * {
    transition: all 0.3s;
  }

  &:hover {
    & svg path {
      fill: var(--colorEmphasis1)!important;
    }
  }
`