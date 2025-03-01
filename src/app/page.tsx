import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Uatashiwa</h1>
        <Image
          src="/assets/L29.webp"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Image
          src="/assets/bambu.webp"
          alt="Next.js logo"
          width={280}
          height={58}
          priority
        />
        <h1>The CEO/CTO Himself!</h1>
      </main>
    </div>
  );
}
