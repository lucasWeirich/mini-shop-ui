import Banner from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import DisplayProducts from "../components/DisplayProducts/DisplayProducts";
import usePageTitle from "../hooks/usePageTitle";
import LayoutDefault from "../layouts/default.layout";
import { bannersHome } from "../utils/bannerHome";

export default function Home() {
  usePageTitle('');

  return <LayoutDefault>

    <Banner banners={bannersHome} />

    <Container>
      <DisplayProducts
        title="Destaques"
        category="destaque"
      />
      <DisplayProducts
        title="Promoções"
        category="promo"
      />

    </Container>
  </LayoutDefault>
}