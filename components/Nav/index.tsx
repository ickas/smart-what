import { Logo } from "utils/brand";
import { NavProps } from "./types";
import * as Styles from "./styles";
import Link from "next/link";
import { Web3Button } from "@web3modal/react";

const Nav = (props: NavProps) => {
  const { bg = false, linkUrl = "#0", linkValue = "" } = props;

  return (
    <Styles.Wrapper>
      <Styles.Overlay bg={bg}>
        <div>
          <Logo main={!bg} />
          <img src="favicon.svg" alt="" />
        </div>
        <div>
          <Link href={linkUrl}>{linkValue}</Link>
          <Web3Button />
        </div>
      </Styles.Overlay>
    </Styles.Wrapper>
  );
};
export default Nav;
