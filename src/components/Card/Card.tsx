import * as C from './Card.styles'
import { Icon } from '@mdi/react';
import { mdiCartArrowDown } from '@mdi/js';
import { useState } from 'react';

interface CardProps {

}

export default function Card({ }: CardProps) {

  const [inTheCart, setInTheCart] = useState(true)

  function handleClickAddToCard() {
    setInTheCart(!inTheCart)
  }

  return <C.Wrapper to='/'>
    <C.Title>Product 01</C.Title>
    <C.Img src="productTest.png" alt="" />

    <C.Buttons>
      <C.Price>$ 90.8</C.Price>
      <C.AddToCart
        active={inTheCart}
        onClick={handleClickAddToCard}
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