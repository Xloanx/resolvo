"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="grid items-center justify-center gap-4">
      <div className="text-2xl text-red-500">Error fetching tickets</div>
      <div>
      <Button variant="outline" onClick={() => reset()}>Try Again</Button>

      </div>
    </div>
  );
}