import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='m-20 flex flex-col items-center justify-center'>
      <h2 className='flex flex-col items-center gap-10 text-2xl'>
        <span className='text-4xl text-red-500'>404! </span>Not Found
      </h2>
      <p className=''>Could not find requested resource</p>
      <Link
        href='/'
        className='mt-8 rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
      >
        <span className='sr-only'>Click to Return Home </span>
        Return Home
      </Link>
    </div>
  );
}
