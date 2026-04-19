import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full sticky top-0 flex justify-between gap-0 bg-gray-100 px-15 py-2">
      <div className="brand-name flex items-start justify-center">
        <h1 className="text-gray-900 text-sm font-poppins" style={{fontFamily: "var(--font-poppins)"}}>
          Hikari<span className="text-rose-500 font-poppins" style={{fontFamily: "var(--font-poppins)"}}>Novels</span>
        </h1>
      </div>

      <div className="flex gap-6 text-sm font-poppins">
        <Link href="/" className="text-gray-700 hover:text-rose-500">Home</Link>
        <Link href="/browse" className="text-gray-700 hover:text-rose-500">Browse</Link>
      </div>
    </nav>
  )
}