
import { NavLink } from "react-router-dom";

function AdminPosts ({ posts=[] }) {
  console.log(posts);
  return (
    <ul className="mx-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-4">
      { 
        posts?.map(post => (
          <li key={post._id} className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md p-2 cursor-pointer">
            <NavLink to={`/AdminPostView/${post._id}`}>
              <img src={post.images[0]} className="w-full h-auto object-cover rounded-md mb-4" />
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex mb-2">
                  <div className="w-[50%] pr-2">
                    <p className="text-3xl font-semibold mb-2 font-anton">{ post.title }</p>
                    <p className="text-lg font-bold text-green-500 mb-2">
                      Precio: ${ post.price }
                    </p>
                  </div>
                  <div className="w-[50%] pl-2">
                    <p className="bg-[#ddc807] text-center rounded-md text-white font-bold text-xl mb-2">{ post.service }</p>
                    <p className="bg-[#042b5e] text-center rounded-md text-white font-semibold text-xl">{ post.type }</p>
                  </div>
                </div>
                <span style={{
                  background: post.hidden ? '#ddc807' : "rgb(34 197 94)" 
                }}>{ post.hidden ? "oculto" : "visible" }</span>
              </div>
            </NavLink>
          </li>
        )) 
      }
    </ul>
  );
}

export default AdminPosts;