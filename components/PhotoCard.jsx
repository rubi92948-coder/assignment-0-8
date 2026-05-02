export default function PhotoCard({ photo }) {
  return (
    <div className="border rounded-lg p-3 shadow">
      
      {/* Image FIXED */}
      <img
        src={photo.image_url}
        alt={photo.title}
        className="w-full h-40 object-cover rounded"
      />

      {/* Title */}
      <h2 className="font-bold mt-2">{photo.title}</h2>

      {/* Category */}
      <p className="text-sm text-gray-500">{photo.category}</p>
    </div>
  );
}