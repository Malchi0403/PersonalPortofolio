import { useState } from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              duration={400}
             offset={
  item.id === "home"
    ? -100
    : item.id === "contact"
    ? -90
    : -80
}
              onSetActive={() => setActive(item.id)}
              className={`cursor-pointer transition-all  ${
                active === item.id
                  ? "text-fuchsia-500"
                  : "text-white hover:text-fuchsia-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};