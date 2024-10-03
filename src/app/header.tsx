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
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <h2 className="text-orange-400 text-2xl font-bold">The Perfume</h2>
          <span className="text-green-500 ml-1">🍃</span>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex gap-x-6">
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
        <div className="flex-1"></div>
      </div>
    </header>
  );
}

export default Header;
