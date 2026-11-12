import { useState } from 'react'
import { useBooksContext } from '../context/BooksContext'
import StatsBar from '../components/StatsBar'
import BookList from '../components/BookList'
import EmptyState from '../components/EmptyState'
import ConfirmDialog from '../components/ConfirmDialog'
import SearchBar from '../components/SearchBar'
import StatusFilter from '../components/StatusFilter'

function HomePage() {
  const { books, updateBook, deleteBook } = useBooksContext()
  // Silme işlemi onaya bağlı: önce silinecek kitabın id'sini burada tutuyoruz.
  const [silinecekId, setSilinecekId] = useState(null)
  const [aramaMetni, setAramaMetni] = useState('')
  const [durumFiltresi, setDurumFiltresi] = useState('tumu')

  function handleStatusChange(id, status) {
    updateBook(id, { status })
  }

  function handleDeleteRequest(id) {
    setSilinecekId(id)
  }

  function handleConfirmDelete() {
    deleteBook(silinecekId)
    setSilinecekId(null)
  }

  function handleCancelDelete() {
    setSilinecekId(null)
  }

  // Arama metni ve durum filtresi aynı anda uygulanır.
  const filtrelenmisKitaplar = books.filter((book) => {
    const aramaUyuyor =
      book.title.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      book.author.toLowerCase().includes(aramaMetni.toLowerCase())
    const durumUyuyor =
      durumFiltresi === 'tumu' || book.status === durumFiltresi
    return aramaUyuyor && durumUyuyor
  })

  return (
    <div className="mx-auto max-w-5xl p-4">
      <StatsBar books={books} />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={aramaMetni} onChange={setAramaMetni} />
        <StatusFilter value={durumFiltresi} onChange={setDurumFiltresi} />
      </div>

      {books.length === 0 ? (
        <EmptyState />
      ) : filtrelenmisKitaplar.length === 0 ? (
        <p className="mt-6 text-center text-slate-500">
          Aramanla eşleşen kitap bulunamadı.
        </p>
      ) : (
        <div className="mt-6">
          <BookList
            books={filtrelenmisKitaplar}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteRequest}
          />
        </div>
      )}

      <ConfirmDialog
        open={silinecekId !== null}
        title="Kitabı sil"
        message="Bu kitabı silmek istediğine emin misin? Bu işlem geri alınamaz."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  )
}

export default HomePage
