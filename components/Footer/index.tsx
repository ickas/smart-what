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
            <Link href="https://twitter.com/henriq__e" target="_blank" rel="noreferrer noopener">
              @henriq__e
            </Link>
            ,{" "}
            <Link
              href="https://twitter.com/henriquesilvaog"
              target="_blank"
              rel="noreferrer noopener"
            >
              @henriquesilvaog
            </Link>
            , @moshmage ,{" "}
            <Link
              href="https://twitter.com/rodrigosous_a"
              target="_blank"
              rel="noreferrer noopener"
            >
              @rodrigosous_a
            </Link>
          </span>
        </div>
      </Styles.Container>
    </Styles.Wrapper>
  );
}
