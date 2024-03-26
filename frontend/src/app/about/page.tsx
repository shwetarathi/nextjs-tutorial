import Link from "next/link";

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About page</h1>
        <Link href='/'>Go to home</Link>
      </main>
    );
  }
  