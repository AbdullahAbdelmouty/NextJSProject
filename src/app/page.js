"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { gtmPageView } from "@/lib/gtm";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    const props = {
      page_title: "home"
    }
    gtmPageView(props)
  },[])
  return (
    <div>
      <h1>
        Welcome in <Link href="/about" style={{color:"red"}}>Tasahel</Link>
      </h1>
      <h1>
        contact us <Link href="/contact" style={{color:"blue"}}>contact</Link>
      </h1>
    </div>
  );
}
