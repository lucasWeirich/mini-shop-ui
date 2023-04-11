import styled from "styled-components"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

interface LayoutDefaultProps {
  children: React.ReactNode
}

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return <Wrapper>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`