import { BOOK_STATUSES } from '../interfaces/book'

const SECENEKLER = [
  { value: 'tumu', label: 'Tümü' },
  { value: BOOK_STATUSES.TO_READ, label: 'Okunacak' },
  { value: BOOK_STATUSES.READING, label: 'Okunuyor' },
  { value: BOOK_STATUSES.DONE, label: 'Okundu' },
]

function StatusFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {SECENEKLER.map((secenek) => (
        <button
          key={secenek.value}
          onClick={() => onChange(secenek.value)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            value === secenek.value
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          {secenek.label}
        </button>
      ))}
    </div>
  )
}

export default StatusFilter
