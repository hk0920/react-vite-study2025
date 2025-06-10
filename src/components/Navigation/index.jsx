import { NavLink } from "react-router-dom";

const navData = [
  {
    path: "/",
    title: "Router",
  },
  {
    path: "/state",
    title: "2주차",
  },
  {
    path: "/effect",
    title: "3주차",
  },
  {
    path: "/week4",
    title: "4주차",
  },
  {
    path: "/week5",
    title: "5주차",
  },
  {
    path: "/week6",
    title: "6주차",
  },
  {
    path: "/week7",
    title: "7주차",
  },
  {
    path: "/week8",
    title: "8주차",
  },
];

const Navigation = () => {
  return (
    <nav className="box__navigation">
      <div className="box__inner">
        {navData.map((el, idx) => {
          return (
            <NavLink className="link" to={el.path} key={`navigation-${idx}`}>
              {idx + 1}주차_{el.title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
