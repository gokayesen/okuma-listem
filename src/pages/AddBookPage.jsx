import { useNavigate } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { useBooksContext } from '../context/BooksContext'

function AddBookPage() {
  const { addBook } = useBooksContext()
  const navigate = useNavigate()

  function handleSubmit(bookData) {
    addBook(bookData)
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-slate-800">Kitap Ekle</h1>
      <div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
        <BookForm onSubmit={handleSubmit} submitLabel="Ekle" />
      </div>
    </div>
  )
}

export default AddBookPage
