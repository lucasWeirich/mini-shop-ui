import styled from "styled-components";
import Container from "../components/Container/Container";
import LayoutDefault from "../layouts/default.layout";
import { useState, useEffect } from "react";
import { products } from "../utils/products";

export default function Cart() {

  const [productInCart, setProductInCart] = useState<{ id: number, name: string, description: string, price: number }[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartMathPoint') || '[]');
    setProductInCart(products.filter(product => cart.includes(product.id)));
  }, []);

  function handleClickFinalized() {
    alert('Obrigado por comprar!');
    localStorage.removeItem('cartMathPoint');
    setProductInCart([]);
  }

  return (
    <LayoutDefault>
      <Container>
        <Wrapper>
          <h1>Produtos no Carrinho</h1>
          <Table>
            <thead>
              <tr>
                <th>Prod.</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {productInCart.length > 0 ? (
                productInCart.map(product => (
                  <tr key={product.id}>
                    <td>
                      <img src={`products/${product.id}/capa.png`} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>$ {product.price.toLocaleString("pt-BR")}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>Nenhum tênis no carrinho!</td>
                </tr>
              )}
            </tbody>
          </Table>

          {
            productInCart.length > 0 &&
            <ButtonFinalized onClick={handleClickFinalized}>Finalizar compra</ButtonFinalized>
          }
        </Wrapper>
      </Container>
    </LayoutDefault>
  );
}

const Wrapper = styled.div`
  margin: 50px 0;
  min-height: calc(100vh - 211px);
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  background-color: var(--colorBgEmphasis);
  border-radius: 10px;
  text-align: center;

  & thead {
    & th {
      padding: 10px;
      border-bottom: solid 1px #111;
    }
  }

  & tbody {
    & tr {
      &:not(:last-child) {
        & td {
          border-bottom: solid 1px #111;
        }
      }
    }
  }

  & td {
    padding: 10px;
    font-size: 15px;

    &:first-child {
      width: 100px;

      & img {
        width: 100%;
        height: auto;
      }
    }
    &:last-child {
      width: 120px;
    }
  }

  @media (max-width: 800px) {
    & thead {
      display: none;
    }

    & tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: solid 1px #000;

      & td {
        border: none!important;
      }
    }
  }
`;


const ButtonFinalized = styled.button`
  border: none;
  outline: none;
  margin: 30px auto;
  display: flex;
  padding: 5px 30px;
  background-color: var(--colorEmphasis);
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--colorEmphasis2);
    box-shadow: 8px 8px 10px -6px var(--colorEmphasis2);
    cursor: pointer;
  }
`