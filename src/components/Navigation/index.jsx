
import { NavLink } from "react-router-dom";

const navData=[
  {
    path:"/",
    title:"Router"
  },
  {
    path:"/state",
    title:"2주차"
  },
  {
    path:"/effect",
    title:"3주차"
  },
  {
    title:"4주차"
  },
  {
    title:"5주차"
  },
  {
    title:"6주차"
  },
  {
    title:"7주차"
  },
  {
    title:"8주차"
  },
];

const Navigation=()=>{
  return(
    <nav className="box__navigation">
      {navData.map((el, idx)=>{
        return(
          <NavLink className="link" to={el.path}>{idx+1}주차_{el.title}</NavLink>
        )
      })}
    </nav>
  )   
}

export default Navigation;