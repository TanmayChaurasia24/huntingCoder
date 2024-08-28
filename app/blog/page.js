"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogs();
  }, []);

  const handleblogpost = (title, content, author, date) => {};

  return (
    <>
      <div>
        <h1 className="text-center">Blogs List</h1>
        {error && <p>Error: {error}</p>}
        {blog.length === 0 ? (
          <h2>No Blogs Available</h2>
        ) : (
          <div className="flex justify-center items-center">
            <ul className="flex flex-col justify-center">
              {blog.map((item, index) => (
                <Link href={`blogpost/${item.title}`} className="no-underline text-black">
                  <li key={index} className="list-none">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="flex gap-3">
                      <p>{item.author}</p>
                      <p>{item.date}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
