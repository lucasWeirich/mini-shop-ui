import styled from "styled-components"

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <Wrapper>
    {children}
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`