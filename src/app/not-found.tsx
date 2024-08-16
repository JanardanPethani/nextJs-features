import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h2 className="font-semibold text-xl">404 Buddy.</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="mt-3 p-2 border rounded-md bg-slate-700 text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
