import Button from "@/components/Button";
import { Logo } from "utils/brand";
import { NavProps } from "./types";
import * as Styles from "./styles";
import Link from "next/link";

const Nav = (props: NavProps) => {
  const { bg = false, buttonValue = "", pastTransValue = "" } = props;

  return (
    <Styles.Wrapper>
      <Styles.Overlay bg={bg}>
        <div>
          <Logo />
        </div>
        <div>
          <Link href="/translations">{pastTransValue}</Link>
          <Button
            value={buttonValue}
            onClick={() => {
              console.log("open wallet");
            }}
          />
        </div>
      </Styles.Overlay>
    </Styles.Wrapper>
  );
};
export default Nav;
