import * as Styles from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { value = "", onClick = () => {} } = props;

  return (
    <Styles.Wrapper onClick={onClick}>
      <span>{value}</span>
    </Styles.Wrapper>
  );
};

export default Button;
