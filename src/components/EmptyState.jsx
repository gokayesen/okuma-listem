import { Link } from 'react-router-dom'

function EmptyState() {
  return (
    <div className="mt-6 rounded-xl bg-white p-10 text-center shadow-sm">
      <p className="text-4xl">📖</p>
      <p className="mt-3 text-lg font-medium text-slate-700">
        Henüz kitap eklenmemiş.
      </p>
      <Link
        to="/ekle"
        className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        İlk kitabını ekle
      </Link>
    </div>
  )
}

export default EmptyState
