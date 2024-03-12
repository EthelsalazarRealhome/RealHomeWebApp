import { NavLink } from "react-router-dom";

function Posts({ posts = [] }) {
  const reversedPosts = posts.slice().reverse();

  

  return (
    <ul className="mx-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-4">
      {reversedPosts.length !== 0 ? (
        reversedPosts?.map((post) => (
          <li key={post._id} className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md p-2 cursor-pointer">
            <NavLink to={`/PostView/${post._id}`}>
              <img src={post.images[0]} className="w-full h-auto object-cover rounded-md mb-4" />
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex mb-2">
                  <div className="w-[50%] pr-2">
                    <p className="text-xl sm:text-base md:text-lg lg:text-3xl xl:text-2xl font-semibold mb-2 font-anton line-clamp-2">{post.title}</p>
                    <div className="text-lg font-bold text-green-500 mb-2">
                      Precio: ${post.price?.toLocaleString()}
                      {post.service === "alquiler" ? "/mensuales" : null}
                      {post.neg_price ? <p className="font-bold">Negociables</p> : null}
                    </div>
                  </div>
                  <div className="w-[70%] inline-block pl-2">
                    <p className="bg-[#ddc807] text-center rounded-md text-white font-semibold text-base mb-2">{post.service}</p>
                    <p className="bg-[#042b5e] text-center rounded-md text-white font-semibold text-base">{post.type}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </li>
        ))
      ) : (
        <section className="container mx-auto px-6 py-16 mb-11 text-2xl lg:text-6xl">
          <p className="">No se encontraron propiedades con los parámetros dados</p>
        </section>
      )}
    </ul>
  );
}

export default Posts;
