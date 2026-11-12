import { Link, useNavigate, useParams } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { useBooksContext } from '../context/BooksContext'

function EditBookPage() {
  const { id } = useParams()
  const { getBookById, updateBook } = useBooksContext()
  const navigate = useNavigate()
  const book = getBookById(id)

  // Kitap silinmiş ya da id geçersizse kullanıcıyı uyar.
  if (!book) {
    return (
      <div className="mx-auto max-w-2xl p-4 text-center">
        <h1 className="text-2xl font-bold text-slate-800">
          Kitap bulunamadı
        </h1>
        <p className="mt-2 text-slate-500">
          Düzenlemek istediğin kitap silinmiş olabilir.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Ana sayfaya dön
        </Link>
      </div>
    )
  }

  function handleSubmit(bookData) {
    updateBook(id, bookData)
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-slate-800">Kitabı Düzenle</h1>
      <div className="mt-4 rounded-xl bg-white p-6 shadow-sm">
        <BookForm
          initialValues={book}
          onSubmit={handleSubmit}
          submitLabel="Güncelle"
        />
      </div>
    </div>
  )
}

export default EditBookPage
