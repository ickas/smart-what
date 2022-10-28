import { ReactNode } from "react";

interface TranslationProps {
  children: ReactNode;
}

const Translation = (props: TranslationProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Translation;
