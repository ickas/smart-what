import Link from "next/link";
import * as Styles from "./styles";

export default function Footer() {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <div>
          <img src="footer-icon.svg" alt="" />
        </div>
        <div>
          <span>
            Made with 💜 by{" "}
            <Link href="https://twitter.com/henriq__e" target="_blank">
              @henriq__e
            </Link>
            ,{" "}
            <Link href="https://twitter.com/henriquesilvaog" target="_blank">
              @henriquesilvaog
            </Link>
            , Mosh &{" "}
            <Link href="https://twitter.com/rodrigosous_a" target="_blank">
              @rodrigosous_a
            </Link>
          </span>
        </div>
      </Styles.Container>
    </Styles.Wrapper>
  );
}
