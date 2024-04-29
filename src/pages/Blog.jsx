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

        <FormElementsSelectPlainLgHelperText blog={data} />

        <div className="grid grid-cols-3 gap-10">
          {data?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function FormElementsSelectPlainLgHelperText({ blog }) {
  return (
    <>
      {/*<!-- Component: Plain large select with helper text --> */}
      <div className="relative my-6 md:w-60">
        <select
          id="id-08"
          name="id-08"
          required
          className="peer relative h-12 w-full appearance-none border-b border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected>
            Show All
          </option>
          {/* {blog.map((post) => (
            <option value={post.attributes.Category} key={post.id}>
              {post.attributes.Category}
            </option>
          ))} */}

          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-08"
          className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-base text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-3.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-08 description-08"
          role="graphics-symbol"
        >
          <title id="title-08">Arrow Icon</title>
          <desc id="description-08">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
          <span>Text field with helper text</span>
        </small>
      </div>
      {/*<!-- End Plain large select with helper text --> */}
    </>
  );
}
