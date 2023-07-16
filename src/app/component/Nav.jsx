import Link from "next/link";

const Nav = () => {
  const navmenu = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/movies",
      name: "Movies",
    },
    {
      path: "/contact",
      name: "Contact Us",
    },
  ];
  return (
    <>
      <nav>
        <div className="flex font-bold gap-6">
          {navmenu.map((item, index) => {
             return(
              <ul  className="hover:text-red-600">
                <li >
                  <Link href={item.path}>{item.name} </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
