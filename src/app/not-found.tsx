import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center m-20 ">
      <h2 className="text-2xl flex flex-col items-center gap-10 ">
        <span className="text-4xl text-red-500 ">404! </span>Not Found
      </h2>
      <p className="">Could not find requested resource</p>
      <Link
        href="/"
        className="text-white hover:bg-secondary px-4 py-2 rounded-lg bg-green-800 transition duration-200 text-sm md:text-base mt-8"
      >
        <span className="sr-only">Click to Return Home </span>
        Return Home
      </Link>
    </div>
  );
}
