import Card from '../components/Card'

interface Book {
  id: number
  name: string
  type: string
  available: boolean
}

async function getBooks() {
  
  const res = await fetch('https://simple-books-api.glitch.me/books')
  if (!res.ok) {
    throw new Error('Failed to fetch books')
  }
  return res.json()
}

export default async function ServerSide() {
  const books = await getBooks()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Server-side Fetched Books</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {books.map((book: Book) => (
          <Card
            key={book.id}
            title={book.name}
            image={`https://picsum.photos/seed/${book.id}/300/200`}
            description={`Type: ${book.type}, Available: ${book.available ? 'Yes' : 'No'}`}
          />
        ))}
      </div>
    </div>
  )
}