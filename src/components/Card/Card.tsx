import * as C from './Card.styles'
import { Icon } from '@mdi/react';
import { mdiCartArrowDown } from '@mdi/js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  product: {
    id: number,
    name: string,
    price: number,
  }
}

export default function Card({ product }: CardProps) {

  const [inTheCart, setInTheCart] = useState<boolean>(validaProductInCart)

  function validaProductInCart() {
    let cart = localStorage.getItem('cartMathPoint');
    if (cart) {
      if (JSON.parse(cart).includes(product.id))
        return true;
      else return false;
    }
    else return false;
  }

  function handleClickAddToCard(id: number) {
    const cart = JSON.parse(localStorage.getItem('cartMathPoint') || '[]');
    const index = cart.findIndex((item: any) => item === id);
    if (index !== -1) {
      const newCart = cart.filter((item: any) => item !== id);
      localStorage.setItem('cartMathPoint', JSON.stringify(newCart));
      setInTheCart(false);
    } else {
      cart.push(id);
      localStorage.setItem('cartMathPoint', JSON.stringify(cart));
      setInTheCart(!inTheCart);
    }
  }

  return <C.Wrapper>
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