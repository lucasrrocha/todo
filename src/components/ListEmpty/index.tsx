import { Container, Image, Text } from "./styles";

import clipboard from '../../assets/images/Clipboard.png';

type Props = {
  title: string;
  subtitle: string;
}

export function ListEmpty({ title, subtitle }: Props) {
  return (
    <Container>
      <Image source={clipboard} />
      <Text bold>{title}</Text>
      <Text>{subtitle}</Text>
    </Container>
  )
}