import LayoutDefault from "../layouts/default.layout"
import Container from "../components/Container/Container"
import DisplayProducts from "../components/DisplayProducts/DisplayProducts"
import usePageTitle from "../hooks/usePageTitle"

export default function AllProducts() {
  usePageTitle('Todos os Tênis');
  
  return <LayoutDefault>
    <Container>
      <DisplayProducts
        title="Todos os Tênis"
        category="all"
      />
    </Container>
  </LayoutDefault>
}