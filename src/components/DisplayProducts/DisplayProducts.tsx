import { products } from '../../utils/products'
import Card from '../Card/Card'
import TitleEmphasis from '../TitleEmphasis/TitleEmphasis'
import * as DP from './DisplayProducts.styles'

interface DisplayProducts {
  title: string
}

export default function DisplayProducts({ title }: DisplayProducts) {
  return <DP.Wrapper>
    <TitleEmphasis title={title} />

    <DP.Display>
      {
        products.map(product => (
          <Card />
        ))
      }
      {
        products.map(product => (
          <Card />
        ))
      }
      {
        products.map(product => (
          <Card />
        ))
      }
      {
        products.map(product => (
          <Card />
        ))
      }
    </DP.Display>
  </DP.Wrapper>
}