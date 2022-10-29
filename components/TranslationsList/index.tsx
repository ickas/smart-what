import * as Styles from "./styles";
import { TranslationsListProps } from "./types";

const TranslationsList = (props: TranslationsListProps) => {
  const { children } = props;

  return (
    <Styles.Wrapper>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Wrapper>
  );
};

export default TranslationsList;
