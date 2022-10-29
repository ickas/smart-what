import { FormatterProps } from "./types";
import * as Styles from "./styles";

const Formatter = (props: FormatterProps) => {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default Formatter;
