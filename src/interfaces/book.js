// Durum sabitleri: metin yazım hatalarını önlemek için tek yerde tutuyoruz.
export const BOOK_STATUSES = {
  TO_READ: 'okunacak',
  READING: 'okunuyor',
  DONE: 'okundu',
}

/**
 * @typedef {Object} Book
 * @property {string} id - crypto.randomUUID() ile üretilir
 * @property {string} title - Kitap adı (zorunlu)
 * @property {string} author - Yazar (zorunlu)
 * @property {number|null} pages - Sayfa sayısı (opsiyonel, pozitif sayı)
 * @property {string} status - BOOK_STATUSES içindeki değerlerden biri
 * @property {number|null} rating - 1-5 arası puan, sadece "okundu" ise anlamlı
 * @property {string} note - Kısa not (opsiyonel)
 * @property {string} createdAt - ISO tarih
 */
