"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { gtmPageView } from "@/lib/gtm";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  useEffect(()=>{
    const props = {
      page_title: "home"
    }
    gtmPageView(props)
  },[])
  const handleReload = () => {
    router.reload();
  };
  return (
    <div>
      <h1>
        Welcome in <Link href="/about" style={{color:"red"}} onClick={handleReload}>Tasahel</Link>
      </h1>
      <h1>
        contact us <Link href="/contact" style={{color:"blue"}} onClick={handleReload}>contact</Link>
      </h1>
    </div>
  );
}
