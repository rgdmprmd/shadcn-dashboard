const SsgPage = async () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>SSG (Static Site Generation)</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>Since i am using app router for this site, so i can&apos;t give you an example. In short, SSG will fetch all your data during build.</p>
        <p>The render behaviour is instant. Once you click the route all your data will be there, without load to external resources.</p>
        <p>
          Data can be updated using
          <span className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded text-sm/6 font-[family-name:var(--font-geist-mono)] font-semibold text-accent-foreground">revalidate</span> but will
          not be shows instantly. Need to reload two times (or get visited by more than 1 users).
        </p>
      </div>
    </main>
  );
};

export default SsgPage;
