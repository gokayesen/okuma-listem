const STORAGE_KEY = 'okuma-listem-kitaplar'

// localStorage'da veri olmayabilir ya da bozuk JSON olabilir; bu yüzden try/catch kullanıyoruz.
export function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (error) {
    console.error('Kitaplar okunamadı, veri bozuk olabilir:', error)
    return null
  }
}

export function saveBooks(books) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  } catch (error) {
    console.error('Kitaplar kaydedilemedi:', error)
  }
}
