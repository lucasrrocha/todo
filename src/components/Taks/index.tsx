import { Button } from "../Button";
import { Container, Task } from "./styles";

import { CheckboxComponent } from "../Checkbox";

type Props = {
  task: string;
  value: boolean;
  onRemove: () => void;
  onValueChange: () => void;
}

export function Tasks({ task, onRemove, onValueChange, value }: Props) {
  return (
    <Container>
      <CheckboxComponent
        value={value}
        onValueChange={onValueChange}
      />

      <Task value={value}>
        {task}
      </Task>


      <Button
        variant='FILLED'
        icon='trash-2'
        onPress={onRemove}
      />
    </Container>
  );
}