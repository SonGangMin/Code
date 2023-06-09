import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <ArticleItem key={i} id={i} />
        ))}
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
// const Articles = () => {
//   const activeStyle = {
//     color: "green",
//     fontSize: 21,
//   };
//   return (
//     <div>
//       <ul>
//         <li>
//           <NavLink
//             to="/articles/1"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글1
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/articles/2"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글2
//           </NavLink>
//         </li>
//         <li>
//           <Link to="/articles/3">게시글3</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// };
