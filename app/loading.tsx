export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24">
      <div className="flex items-center gap-3 font-mono text-sm text-ink-600/60 dark:text-paper/40">
        <span className="h-2 w-2 animate-blink rounded-full bg-signal-teal" />
        loading...
      </div>
    </div>
  );
}
