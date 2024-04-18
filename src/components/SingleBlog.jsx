import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function SingleBlog() {
  const { id } = useParams();
  const { data: blog, loading } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs/${id}?populate=*`
  );

  if (loading) {
    return <div>loading.....</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto p-20">
      <h2>{blog?.attributes.Title}</h2>
      <div className="prose mx-auto">
        <BlocksRenderer content={blog.attributes.Description} />
      </div>
    </div>
  );
}
