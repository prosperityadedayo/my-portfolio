"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="label-mono mb-4 text-signal-coral">error</p>
      <h1 className="font-display text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-3 max-w-sm text-ink-600 dark:text-paper/60">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-medium text-paper dark:bg-signal-teal dark:text-ink-900"
      >
        Try again
      </button>
    </div>
  );
}
