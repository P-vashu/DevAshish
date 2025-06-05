const products = [
  {
    name: 'Basmati Rice',
    image: '/images/rice.jpg',
    description: 'Premium quality long-grain basmati rice, perfect for export markets.',
  },
  {
    name: 'Wheat Flour',
    image: '/images/flour.jpg',
    description: 'Fine, natural wheat flour suitable for a variety of baking and cooking needs.',
  },
  {
    name: 'Spices Mix',
    image: '/images/spices.jpg',
    description: 'Aromatic and carefully blended spice mix sourced from the best farms.',
  },
]

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="border rounded-lg shadow p-4 text-center bg-white">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
