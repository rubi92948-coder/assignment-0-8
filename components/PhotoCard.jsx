import Link from "next/link";

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

      {/* VIEW DETAILS BUTTON */}
      <div className="flex justify-center mt-4">
        <Link href={`/all-photos/${photo.id}`}>
          <button className="
            px-5 py-2 
            bg-purple-600 
            text-white 
            rounded-md 
            hover:bg-purple-800
          ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}