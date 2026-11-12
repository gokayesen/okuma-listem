import { useEffect, useState } from 'react'
import { loadBooks, saveBooks } from '../utils/storage'
import { BOOK_STATUSES } from '../interfaces/book'

// Uygulama hiç kullanılmamışsa liste boş görünmesin diye örnek kitaplar.
const ORNEK_KITAPLAR = [
  {
    id: crypto.randomUUID(),
    title: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    pages: 671,
    status: BOOK_STATUSES.DONE,
    rating: 5,
    note: 'Etkileyici bir psikolojik roman.',
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Simyacı',
    author: 'Paulo Coelho',
    pages: 182,
    status: BOOK_STATUSES.READING,
    rating: null,
    note: '',
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: '1984',
    author: 'George Orwell',
    pages: 328,
    status: BOOK_STATUSES.TO_READ,
    rating: null,
    note: '',
    createdAt: new Date().toISOString(),
  },
]

export function useBooks() {
  const [books, setBooks] = useState(() => loadBooks() ?? ORNEK_KITAPLAR)

  // books her değiştiğinde localStorage'a yazarak kalıcı hale getiriyoruz.
  useEffect(() => {
    saveBooks(books)
  }, [books])

  function addBook(bookData) {
    const newBook = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...bookData,
    }
    setBooks((prev) => [...prev, newBook])
    return newBook
  }

  function updateBook(id, updates) {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...updates } : book)),
    )
  }

  function deleteBook(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  function getBookById(id) {
    return books.find((book) => book.id === id)
  }

  return { books, addBook, updateBook, deleteBook, getBookById }
}
