import styled from "styled-components"
import LayoutDefault from "../layouts/default.layout"
import Container from "../components/Container/Container"
import DisplayProducts from "../components/DisplayProducts/DisplayProducts"
import InputSearch from "../components/InputSearch/InputSearch"
import { useState } from "react"
import usePageTitle from "../hooks/usePageTitle"

export default function Search() {
  usePageTitle(`Pesquisando`)

  const [search, setSearch] = useState('');

  return <LayoutDefault>
    <div style={{minHeight: 'calc(100vh - 161px)'}}>
      <Container>

        <div style={{ margin: '50px 0 30px 0' }}>
          <InputSearch
            label="Informe o nome do tênis que procura..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <DisplayProducts
          title="Resultado da Pesquisa"
          category="search"
          search={search}
        />
      </Container>
    </div>
  </LayoutDefault>
}