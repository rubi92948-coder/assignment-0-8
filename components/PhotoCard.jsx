export default function PhotoCard({ photo }) {
  return (
    <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">

      <img
        src={photo.image_url}
        alt={photo.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="font-bold mt-2">{photo.title}</h2>

      <p className="text-sm text-purple-500">{photo.category}</p>

      {/* Center Button */}
      <div className="flex justify-center mt-4">
        <button
          className="
            px-5 py-2 
            bg-purple-600 
            text-white 
            rounded-md 
            transition-all 
            duration-300 
            hover:bg-purple-800 
            hover:scale-105
            hover:shadow-lg
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
}