import React from "react";

const Slug = ({ params }) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="flex justify-center">
          title of the page {params.blogpostid}
        </h1>
        <hr />
        <div className="flex justify-center items-center mt-5 pl-24 pr-24 pb-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          reprehenderit rerum consequuntur cum quis velit neque, magni sequi
          molestiae distinctio. Esse doloremque a blanditiis modi non eveniet
          quasi quidem, maxime earum dolor sit, quae, quaerat iure beatae natus
        </div>
      </div>
    </main>
  );
};

export default Slug;
