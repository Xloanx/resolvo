"use client";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching tickets</div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}