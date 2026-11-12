import { BOOK_STATUSES } from '../interfaces/book'

function StatsBar({ books }) {
  const total = books.length
  const read = books.filter((b) => b.status === BOOK_STATUSES.DONE).length
  const reading = books.filter((b) => b.status === BOOK_STATUSES.READING).length

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      <StatCard label="Toplam" value={total} color="text-slate-800" />
      <StatCard label="Okunan" value={read} color="text-emerald-600" />
      <StatCard label="Okunmakta" value={reading} color="text-blue-600" />
    </div>
  )
}

function StatCard({ label, value, color }) {
  return (
    <div className="rounded-xl bg-white p-4 text-center shadow-sm">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  )
}

export default StatsBar
