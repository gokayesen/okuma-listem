import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-slate-800">
          📚 Listem
        </Link>
        <Link
          to="/ekle"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Kitap Ekle
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
