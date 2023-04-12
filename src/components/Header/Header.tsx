import * as H from './Header.styles'
import Container from "../Container/Container";
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiCart } from '@mdi/js';

export default function Header() {
  return <H.Wrapper>
    <Container>
      <Link to='/'><H.Logo src='logo.png' /></Link>


      <H.Menu>
        <ul>
          <li><Link to='/Promocoes'>Pesquisar</Link></li>
          <li><Link to='/'>Todos os Tênis</Link></li>
          
          <li>
            <Link to='/cart' className='--icon' >
              <Icon path={mdiCart} color="var(--colorTxt)" size="25px" />
            </Link>
          </li>
        </ul>
      </H.Menu>
    </Container>
  </H.Wrapper>
}

