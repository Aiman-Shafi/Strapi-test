import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        console.log(response.data.data);
        setData(response.data.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// useEffect(() => {
//   fetch("http://localhost:1337/api/blogs?populate=*")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Strapi Blogs", data.data);
//       setBlogs(data.data);
//       console.log(
//         `http://localhost:1337${data.data[0].attributes.Image.data[0].attributes.url}`
//       );
//     });
// }, []);
