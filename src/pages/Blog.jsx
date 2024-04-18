import BlogCard from "../components/BlogCard";
import useFetch from "../hooks/useFetch";

export default function Blog() {
  const { error, data, loading } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading) {
    return (
      <div className="text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h2>Something went wrong please try again later!</h2>
      </div>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-40">
        <h2 className="text-3xl font-bold sm:text-4xl text-indigo-700 mb-10">
          Our Insights
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {data?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </>
  );
}
