import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/events"}>events</Link>
    </main>
  );
}
