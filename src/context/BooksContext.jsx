import { createContext, useContext } from 'react'
import { useBooks } from '../hooks/useBooks'

const BooksContext = createContext(null)

// useBooks hook'unu tüm sayfaların erişebileceği şekilde yukarıdan sağlıyoruz.
export function BooksProvider({ children }) {
  const booksApi = useBooks()
  return (
    <BooksContext.Provider value={booksApi}>{children}</BooksContext.Provider>
  )
}

export function useBooksContext() {
  const context = useContext(BooksContext)
  if (!context) {
    throw new Error('useBooksContext, BooksProvider içinde kullanılmalı')
  }
  return context
}
