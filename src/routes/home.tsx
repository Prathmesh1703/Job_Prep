export const HomePage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-bounce-slow absolute top-10 left-10 w-10 h-10 rounded-full bg-blue-400/30 blur-lg" />
        <div className="animate-bounce-fast absolute bottom-20 right-20 w-16 h-16 rounded-full bg-pink-400/30 blur-lg" />
        <div className="animate-bounce-mid absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-green-400/30 blur-lg" />
      </div>
      <h1 className="text-3xl font-bold mb-4 z-10">Welcome to the Home Page</h1>
      <p className="text-lg z-10">This is the public home page of the application.</p>
    </div>
  );
}