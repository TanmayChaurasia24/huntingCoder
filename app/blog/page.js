import React from "react";
import Link from "next/link";
const Blog = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="mt-10">
          <h2>Popular blogs</h2>
          <div>
            <Link
              className="no-underline text-black"
              href={"/blogpost/javascript-for-beginners"}
            >
              <h3>JavaScript for Beginners</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Link>
          </div>
          <div>
            <h3>JavaScript for Beginners</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div>
            <h3>JavaScript for Beginners</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
