import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl p-4 text-center">
      <h1 className="text-3xl font-bold text-slate-800">404</h1>
      <p className="mt-2 text-slate-600">Bu sayfa bulunamadı.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Ana sayfaya dön
      </Link>
    </div>
  )
}

export default NotFoundPage
