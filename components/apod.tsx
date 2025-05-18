import { ApodProps } from "@/app/(learn)/fetch/csr/page";
import Image from "next/image";
import React from "react";

const Apod = ({ apod }: { apod: ApodProps }) => {
  return (
    <div className="flex flex-col gap-4 border p-4 text-sm/6 font-[family-name:var(--font-geist-mono)] max-w-[600px]">
      {apod.url && <Image src={apod.url} alt={apod.title} width={600} height={600} />}
      <h1>
        <span className="text-muted-foreground">{apod.date}</span> - {apod.title}
      </h1>
      <p className="text-muted-foreground">{apod.explanation.split(". ")[0]}.</p>
    </div>
  );
};

export default Apod;
