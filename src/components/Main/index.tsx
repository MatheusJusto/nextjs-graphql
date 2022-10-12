import * as S from "./styles"

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Ilustration
        src="hero-illustration.svg"
        alt="desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
