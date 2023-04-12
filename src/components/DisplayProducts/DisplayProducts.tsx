import { useState } from 'react'
import { products } from '../../utils/products'
import Card from '../Card/Card'
import TitleEmphasis from '../TitleEmphasis/TitleEmphasis'
import * as DP from './DisplayProducts.styles'

interface DisplayProducts {
  title: string,
  category: 'promo' | 'destaque' | 'all' | 'search'
  search?: string
}

export default function DisplayProducts({ title, category, search }: DisplayProducts) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm: string) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const productsToDisplay = category === 'all' ? filteredProducts :
    filteredProducts.filter((product) => {
      if (category === 'search') {
        if (search)
          return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      } else {
        return product.category === category
      }
    });

  return <DP.Wrapper>
    <TitleEmphasis title={title} />

    {productsToDisplay.length > 0 ? (
      <DP.Display>
        {productsToDisplay.map((product) => (
          <Card
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
            }}
          />
        ))}
      </DP.Display>
    ) : (
      <DP.NoProductFound> Nenhum produto encontrado! </DP.NoProductFound>
    )}
  </DP.Wrapper>
}