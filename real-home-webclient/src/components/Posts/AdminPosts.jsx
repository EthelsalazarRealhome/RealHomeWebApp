
import { NavLink } from "react-router-dom";

function AdminPosts({ posts = [] }) {
  console.log(posts);
  const reversedPosts = posts.slice().reverse();

  return (
    <ul className="mx-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-4">
      {reversedPosts.length !== 0 ? (
        reversedPosts?.map((post) => (
          <li key={post._id} className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md p-2 cursor-pointer">
            <NavLink to={`/AdminPostView/${post._id}`}>
              <img src={post.images[0]} className="w-full h-auto object-cover rounded-md mb-4" />
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex mb-2">
                  <div className="w-[100%] pr-2">
                    <p className="text-lg sm:text-base md:text-lg lg:text-lg xl:text-2xl font-semibold mb-2 line-clamp-2">{post.title}</p>
                    <div className="flex">
                      <div className="text-lg text-green-500 mb-2">
                        ${post.price?.toLocaleString()}
                        {post.service === "alquiler" ? "/mensuales" : null}
                        {post.neg_price ? <p className="">Negociables</p> : null}
                      </div>
                      <div className="w-[70%] inline-block pl-2">
                        <p className="bg-[#ddc807] text-center rounded-md text-white font-semibold text-base mb-2">{post.service}</p>
                        <p className="bg-[#042b5e] text-center rounded-md text-white font-semibold text-base">{post.type}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </NavLink>
          </li>
        ))
      ) : (
        <section className="mx-auto px-6 py-16 mb-11 text-2xl lg:text-4xl">
          <p className="">No se encontraron propiedades con los parámetros dados</p>
        </section>
      )}
    </ul>
  );
}

export default AdminPosts;


