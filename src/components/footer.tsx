export const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-40 bg-black/70 backdrop-blur-md text-white">
      <div className="container mx-auto text-center py-3 px-6">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}