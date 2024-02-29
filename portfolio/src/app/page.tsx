import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">Hello, World!</h1>
        <p className="text-2xl font-light">
          Welcome to my portfolio. I&rsquo;m a web developer.
        </p>
        <Link href="/contact">Contact</Link>
      </div>
    </main>
  );
}
