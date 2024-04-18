import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function BlogCard({ blog }) {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src={
          "http://localhost:1337" +
          blog?.attributes.Featured_Image.data.attributes.url
        }
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          10th Oct 2022{" "}
        </time> */}

        <Link to={`/blog/${blog.id}`}>
          <h3 className="mt-0.5 text-lg text-gray-900">
            {blog.attributes.Title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog.attributes.Excerpt}
        </p>
      </div>
    </article>
  );
}
