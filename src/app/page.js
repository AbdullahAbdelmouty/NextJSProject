import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome in <Link href="/about" style={{color:"red"}}>Tasahel</Link>
      </h1>
    </div>
  );
}
