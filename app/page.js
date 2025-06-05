import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Dhanlaxmi International</h1>
          <p className="text-lg md:text-xl">Exporting quality worldwide</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700">
          Dhanlaxmi International is a leading exporter and supplier of premium quality products, trusted across the globe for our commitment to excellence and timely delivery.
        </p>
      </section>

      {/* Products Preview */}
      <section className="bg-gray-50 py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <p className="mb-4 text-gray-700">We offer a wide range of agricultural and food products tailored to international standards.</p>
        <a href="/products" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Products</a>
      </section>

    </div>
  );
}
