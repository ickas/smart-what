import Link from "next/link";

export default function Translations() {
  return (
    <div>
      <h1>My translations</h1>
      <ul>
        <li>Translation 1</li>
        <li>Translation 2</li>
        <li>Translation 3</li>
      </ul>
      <Link href="/">
        <span>Back</span>
      </Link>
    </div>
  );
}
