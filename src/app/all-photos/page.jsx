import Category from "@/components/Category";
import PhotoList from "@/components/PhotoList";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const res = await fetch(
    "https://assignment-0-8-ne31.vercel.app/data.json"
  );
  const photos = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Photos</h1>

      <Category />

      {/* CLIENT COMPONENT */}
      <PhotoList photos={photos} category={category} />
    </div>
  );
};

export default AllPhotosPage;