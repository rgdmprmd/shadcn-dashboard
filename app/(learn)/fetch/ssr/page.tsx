import Apod from "@/components/apod";
import { delay } from "@/lib/actions";

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
      {apod && <Apod apod={apod} />}
    </main>
  );
};

export default SsrPage;
