import { useState } from 'react'
import { products } from '../../utils/products'
import Card from '../Card/Card'
import TitleEmphasis from '../TitleEmphasis/TitleEmphasis'
import * as DP from './DisplayProducts.styles'

interface DisplayProducts {
  title: string,
  category: 'promo' | 'destaque' | 'all'
}

export default function DisplayProducts({ title, category }: DisplayProducts) {
  return <DP.Wrapper>
    <TitleEmphasis title={title} />

    <DP.Display>
      {
        products.map(product => {
          if (category === 'all') {
            return <Card
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price
              }}
            />
          }  else if (product.category === category) {
            return <Card
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price
              }}
            />
          }
        })
      }
    </DP.Display>
  </DP.Wrapper>
}