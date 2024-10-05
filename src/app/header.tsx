"use client";
function Header() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-stone-950 p-5 border-gray-300 fixed w-full z-10">
      <div className="flex flex-col sm:flex-row items-center justify-start"> {/* Changed to justify-start */}
        {/* Logo */}
        <div className="flex items-center justify-start"> {/* Left aligned */}
          <h2 className="text-orange-400 text-xl sm:text-2xl font-bold">The Perfume</h2>
          <span className="text-green-500 ml-1">🍃</span>
        </div>

        {/* Links */}
        <nav className="flex-grow mt-4 sm:mt-0"> {/* Adjusted margin for mobile view */}
          <ul className="flex justify-center gap-x-4"> 
            <li>
              <a href="#" className="text-stone-100 hover:text-orange-400 transition duration-300" onClick={() => handleScroll("home")}>Home</a>
            </li>
            <li>
              <a href="#product" className="text-stone-100 hover:text-orange-400 transition duration-300" onClick={() => handleScroll("product")}>Product</a>
            </li>
            <li>  
              <a href="#about" className="text-stone-100 hover:text-orange-400 transition duration-300" onClick={() => handleScroll("about")}>About</a>
            </li>
            <li>
              <a href="#contact" className="text-stone-100 hover:text-orange-400 transition duration-300" onClick={() => handleScroll("contact")}>Contact</a>
            </li>
          </ul>
        </nav>   
      </div>
    </header>
  );
}

export default Header;
