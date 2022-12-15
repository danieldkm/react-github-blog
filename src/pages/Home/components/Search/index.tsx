import { SearchContainer, SearchTitleContainer, BaseInput } from './style';

interface SearchProps {
  quantidadePublicacoes: number;
}
export function Search({quantidadePublicacoes}:SearchProps) {
  return (
    <SearchContainer>
      <SearchTitleContainer>
        <h2>Publicações</h2>
        <p>{quantidadePublicacoes} publicações</p>
      </SearchTitleContainer>

      <BaseInput placeholder='Buscar conteúdo' />
    </SearchContainer>
  )
}