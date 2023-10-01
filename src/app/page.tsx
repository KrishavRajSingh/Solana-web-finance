import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <main className="bg-black text-white text-19xl flex min-h-screen flex-col items-center justify-between p-24">
    Solana for the Web3.
    <Link href = "/landing">
    <button className="mx-auto relative inline-flex items-center justify-start p-0.5 mb-72 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
    <span className="cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Go to Landing
    </span>
    </button>
    </Link>
    </main>
   
    </>
    )

}
