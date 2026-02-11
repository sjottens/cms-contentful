import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-top pt-20 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Ottens PortFolio in ContentFul
          </h1>
        </div>
      </main>
    </div>
  );
}
