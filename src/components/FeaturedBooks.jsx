export default async function FeaturedBooks() {
  const res = await fetch(
    "https://assignment-0-8-ne31.vercel.app/data.json",
    { cache: "no-store" }
  );

  const books = await res.json();

  const featured = books.slice(0, 4);

  return (
    <section className="px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {featured.map((book) => (
          <div key={book.id} className="border p-3 rounded-lg shadow">
            <img
              src={book.image_url}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{book.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}