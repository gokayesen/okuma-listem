import { useState } from 'react'
import { BOOK_STATUSES } from '../interfaces/book'

const BOS_FORM = {
  title: '',
  author: '',
  pages: '',
  status: BOOK_STATUSES.TO_READ,
  rating: '',
  note: '',
}

// Düzenleme sayfasında gelen değerler null olabilir; input'lar için bunları '' yapıyoruz.
function normalizeInitial(initial) {
  if (!initial) return BOS_FORM
  return {
    title: initial.title ?? '',
    author: initial.author ?? '',
    pages: initial.pages ?? '',
    status: initial.status ?? BOOK_STATUSES.TO_READ,
    rating: initial.rating ?? '',
    note: initial.note ?? '',
  }
}

function BookForm({ initialValues, onSubmit, submitLabel = 'Kaydet' }) {
  const [values, setValues] = useState(() => normalizeInitial(initialValues))
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  // Basit doğrulama: başlık/yazar boş olamaz, sayfa sayısı girildiyse pozitif olmalı.
  function validate() {
    const newErrors = {}
    if (!values.title.trim()) newErrors.title = 'Başlık zorunlu.'
    if (!values.author.trim()) newErrors.author = 'Yazar zorunlu.'
    if (values.pages !== '' && Number(values.pages) <= 0) {
      newErrors.pages = 'Sayfa sayısı pozitif olmalı.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    onSubmit({
      title: values.title.trim(),
      author: values.author.trim(),
      pages: values.pages !== '' ? Number(values.pages) : null,
      status: values.status,
      rating:
        values.status === BOOK_STATUSES.DONE && values.rating !== ''
          ? Number(values.rating)
          : null,
      note: values.note.trim(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Başlık
        </label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        {errors.title ? (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Yazar
        </label>
        <input
          type="text"
          name="author"
          value={values.author}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        {errors.author ? (
          <p className="mt-1 text-sm text-red-600">{errors.author}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Sayfa Sayısı
        </label>
        <input
          type="number"
          name="pages"
          value={values.pages}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        {errors.pages ? (
          <p className="mt-1 text-sm text-red-600">{errors.pages}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Durum
        </label>
        <select
          name="status"
          value={values.status}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value={BOOK_STATUSES.TO_READ}>Okunacak</option>
          <option value={BOOK_STATUSES.READING}>Okunuyor</option>
          <option value={BOOK_STATUSES.DONE}>Okundu</option>
        </select>
      </div>

      {values.status === BOOK_STATUSES.DONE ? (
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Puan
          </label>
          <select
            name="rating"
            value={values.rating}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Puan ver</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      ) : null}

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Not
        </label>
        <textarea
          name="note"
          value={values.note}
          onChange={handleChange}
          rows={3}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        {submitLabel}
      </button>
    </form>
  )
}

export default BookForm
