import { delay } from "@/lib/actions";
import Image from "next/image";

const SsrPage = async () => {
  await delay(1000);
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
  const apod = await res.json();

  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>SSR (Server-Side Rendering)</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>The name is self explained of the behavior. Component will only render when fetch is resolve.</p>
        <p>You can&apos;t see a glimps of the page before fetch is finish. So, you also cannot see the loading indicator.</p>
      </div>
      {apod && (
        <div className="flex flex-col gap-4 border p-4 text-sm/6 font-[family-name:var(--font-geist-mono)] max-w-[600px]">
          <Image src={apod.url} alt={apod.title} width={600} height={600} />
          <h1>
            <span className="text-muted-foreground">{apod.date}</span> - {apod.title}
          </h1>
          <p className="text-muted-foreground">{apod.explanation.split(". ")[0]}.</p>
        </div>
      )}
    </main>
  );
};

export default SsrPage;
