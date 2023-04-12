import styled from "styled-components";
import { Icon } from '@mdi/react';
import { mdiStarFourPointsOutline } from '@mdi/js';

interface TitleEmphasisProps {
  title: string
}

export default function TitleEmphasis({ title }: TitleEmphasisProps) {
  return <Title>
    <Icon path={mdiStarFourPointsOutline} size="30px" />
    {title}
    <Icon path={mdiStarFourPointsOutline} size="30px" />
  </Title>
}

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Bad Script', cursive;
  letter-spacing: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  & svg path {
    transition: all 0.5s;
  }

  &:hover {
    & svg path {
      fill: var(--colorEmphasis)!important;
    }
  }

  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    gap: 20px;
  }
`