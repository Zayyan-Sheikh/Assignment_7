import Image from 'next/image'

interface CardProps {
  title: string
  image: string
  description: string
  price?: number
}

export default function Card({ title, image, description, price }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
        {price && <p className="text-lg font-bold text-blue-600">${price.toFixed(2)}</p>}
      </div>
    </div>
  )
}