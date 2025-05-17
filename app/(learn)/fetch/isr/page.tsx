const IsrPage = async () => {
  return (
    <main className="flex flex-col row-start-2 gap-[24px]">
      <h1>ISR (Incremental Static Regeneration)</h1>
      <div className="flex flex-col justify-center max-w-[600px] gap-4 text-muted-foreground">
        <p>Same as SSG, since i am using app router so i can&apos;t give you an example. The difference is ISR will revalidate periodically, it minimize stale data.</p>
        <p>The render behaviour is instant. Once you click the route all your data will be there, without load to external resources.</p>
        <p>All the same to SSG you can update the data using revalidate, but now you can set it to pool periodically.</p>
      </div>
    </main>
  );
};

export default IsrPage;
