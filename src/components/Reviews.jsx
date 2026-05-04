export default function Reviews() {
  return (
    <section className="px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        User Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        
        {/* REVIEW 1 */}
        <div className="border p-4 rounded shadow">
          <div className="flex text-yellow-400 mb-2">
            ★★★★★
          </div>
          <p>"Best book platform ever!"</p>
        </div>

        {/* REVIEW 2 */}
        <div className="border p-4 rounded shadow">
          <div className="flex text-yellow-400 mb-2">
            ★★★★☆
          </div>
          <p>"Very easy to use and fast"</p>
        </div>

        {/* REVIEW 3 */}
        <div className="border p-4 rounded shadow">
          <div className="flex text-yellow-400 mb-2">
            ★★★★★
          </div>
          <p>"Amazing UI and smooth experience"</p>
        </div>

      </div>
    </section>
  );
}