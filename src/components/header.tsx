export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-black/70 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center py-3 px-6">
        {/* Circular logo placeholder */}
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mr-6">
          {/* Logo goes here */}
        </div>
        {/* Navigation links */}
        <nav className="flex gap-6">
          <a href="/" className="text-white hover:text-blue-400 transition-colors font-medium">HOME</a>
          <a href="/mock-test" className="text-white hover:text-blue-400 transition-colors font-medium">Mock Test</a>
          <a href="/mock-interview" className="text-white hover:text-blue-400 transition-colors font-medium">Mock Interview</a>
          <a href="/about" className="text-white hover:text-blue-400 transition-colors font-medium">About Us</a>
          <a href="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}