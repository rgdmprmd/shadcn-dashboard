import Apod from "@/components/apod";
import LoadingSpinner from "@/components/loading-spinner";
import { delay } from "@/lib/actions";
import { Suspense } from "react";

const SsrPage = async () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>SSR-suspense (Server-Side Rendering)</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>The power of Server-side data fetching combine with client-side flexibility. As you can see in the display, the behavior is similar like CSR right?</p>
        <p>You can see the page immediatly rendered, and you also can see the loading state of data fetching.</p>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Content />
      </Suspense>
    </main>
  );
};

const Content = async () => {
  await delay(1000);
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
  const apod = await res.json();

  return <div>{apod && <Apod apod={apod} />}</div>;
};

export default SsrPage;
