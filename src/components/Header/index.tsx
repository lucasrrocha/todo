import { Container, Logo } from "./styles";

import logoImg from '../../assets/images/Logo.png';


export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  )
}