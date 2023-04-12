import * as H from './Header.styles'
import Container from "../Container/Container";
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { useEffect, useState } from 'react';

export default function Header() {

  const [amountProductCart, setAmountProductCart] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let cart = localStorage.getItem('cartMathPoint');

      if (cart)
        setAmountProductCart(JSON.parse(cart).length);
    }, 0)
  }, [])

  return <H.Wrapper>
    <Container>
      <Link to='/'><H.Logo src='logo.png' /></Link>


      <H.Menu>
        <ul>
          <li><Link to='/search'>Pesquisar</Link></li>
          <li><Link to='/all-products'>Todos os Tênis</Link></li>

          <li>
            <Link to='/cart' className='--icon --cart'>
              {
                amountProductCart !== 0 &&
                <span>{amountProductCart}</span>
              }
              <Icon path={mdiCart} color="var(--colorTxt)" size="25px" />
            </Link>
          </li>
        </ul>
      </H.Menu>
    </Container>
  </H.Wrapper>
}

