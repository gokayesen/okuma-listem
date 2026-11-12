import { Link } from 'react-router-dom'
import { BOOK_STATUSES } from '../interfaces/book'

// Duruma göre farklı renk sınıfı, kartta görsel ayrım için.
const DURUM_RENKLERI = {
  [BOOK_STATUSES.TO_READ]: 'bg-slate-100 text-slate-700',
  [BOOK_STATUSES.READING]: 'bg-blue-100 text-blue-700',
  [BOOK_STATUSES.DONE]: 'bg-emerald-100 text-emerald-700',
}

function BookCard({ book, onStatusChange, onDelete }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-slate-800">{book.title}</h3>
          <p className="text-sm text-slate-500">{book.author}</p>
        </div>
        <span
          className={`whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium ${DURUM_RENKLERI[book.status]}`}
        >
          {book.status}
        </span>
      </div>

      {book.pages ? (
        <p className="text-sm text-slate-500">{book.pages} sayfa</p>
      ) : null}

      {book.status === BOOK_STATUSES.DONE && book.rating ? (
        <p className="text-amber-500">{'⭐'.repeat(book.rating)}</p>
      ) : null}

      {book.note ? <p className="text-sm text-slate-600">{book.note}</p> : null}

      <select
        value={book.status}
        onChange={(e) => onStatusChange(book.id, e.target.value)}
        className="rounded-lg border border-slate-200 px-2 py-1 text-sm text-slate-700"
      >
        <option value={BOOK_STATUSES.TO_READ}>Okunacak</option>
        <option value={BOOK_STATUSES.READING}>Okunuyor</option>
        <option value={BOOK_STATUSES.DONE}>Okundu</option>
      </select>

      <div className="mt-1 flex gap-2">
        <Link
          to={`/duzenle/${book.id}`}
          className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Düzenle
        </Link>
        <button
          onClick={() => onDelete(book.id)}
          className="flex-1 rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default BookCard
