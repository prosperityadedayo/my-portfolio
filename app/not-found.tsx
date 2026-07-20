import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="label-mono mb-4">error_404</p>
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-sm text-ink-600 dark:text-paper/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-medium text-paper dark:bg-signal-teal dark:text-ink-900"
      >
        Back to home
      </Link>
    </div>
  );
}
