function Navbar() {
  return (
    <nav className="
fixed
top-5
left-1/2
-translate-x-1/2
w-[90%]
max-w-5xl
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-full
z-50
">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white text-2xl font-bold">
          Portfolio
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;