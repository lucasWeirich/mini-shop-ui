import * as C from './Card.styles'
import { Icon } from '@mdi/react';
import { mdiCartArrowDown } from '@mdi/js';
import { useState } from 'react';

interface CardProps {
  product: {
    id: number,
    name: string,
    price: number,
  }
}

export default function Card({ product }: CardProps) {

  const [inTheCart, setInTheCart] = useState(false)

  function handleClickAddToCard(id: number) {
    console.log(id)
    setInTheCart(!inTheCart)
  }

  return <C.Wrapper to='/'>
    <C.Title>{product.name}</C.Title>
    <C.Img src={`products/${product.id}/capa.png`} alt={product.name} />

    <C.Buttons>
      <C.Price>$ {product.price.toLocaleString("pt-BR")}</C.Price>
      <C.AddToCart
        active={inTheCart}
        onClick={() => handleClickAddToCard(product.id)}
      >
        <Icon
          path={mdiCartArrowDown}
          size="20px"
        />
        <span>{inTheCart ? 'Remove to Cart' : 'Add to Cart'}</span>
      </C.AddToCart>
    </C.Buttons>
  </C.Wrapper>
}