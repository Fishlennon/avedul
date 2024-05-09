// 'use client'
import Image from "next/image";
import Link from 'next/link';
import About from "./_components/about";
import Services from "./_components/services";
import Contact from "./_components/contact";
import Gallery from "./_components/gallery";
import Music from "./_components/music";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col space-y-8">
        <About/>
        <Services/>
        <Gallery/>
        <Music/>
        <Contact/>

        {/* <Link href="/home">
            VAMOS
          </Link> */}
      </div>
    </main>
  );
}
