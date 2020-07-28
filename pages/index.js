import * as Responsive from "../components/media"
import styled from 'styled-components';

const Title = styled.span`
  color: red;
`

const TitleNotDesktop = styled.span`
  color: blue;
`

export default function HomePage() {
  return (
    <>
      <Responsive.NotDesktop>
        <TitleNotDesktop> Hello mobile! </TitleNotDesktop>
      </Responsive.NotDesktop>
      <Responsive.Desktop>
        <Title> Hello desktop! </Title>
      </Responsive.Desktop>
    </>
  )
}