import { useState, useEffect } from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Trigger deteksi saat elemen mencapai 1/3 dari layar atas
      const scrollPosition = window.scrollY + (window.innerHeight / 3); 
      let currentActive = "home";
      
      for (const item of navigation) {
        const element = document.getElementById(item.id);
        if (element) {
          // Jika posisi scroll melewati batas atas elemen, jadikan elemen ini active
          if (scrollPosition >= element.offsetTop) {
            currentActive = item.id;
          }
        }
      }
      
      // Khusus jika user scroll sampai mentok ke bawah halaman
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 10) {
        currentActive = navigation[navigation.length - 1].id;
      }

      setActive(currentActive);
    };

    // Jalankan sekali saat pertama render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.id}
              href={`#${item.id}`}
              spy={false} // Matikan spy bawaan react-scroll karena sudah ditangani custom listener
              smooth={true}
              duration={400}
              offset={-80}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer transition-all ${
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