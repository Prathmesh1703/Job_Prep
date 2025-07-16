import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [showInterviewModal, setShowInterviewModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-black/70 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center py-3 px-6">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mr-6" />
        {/* Navigation links */}
        <nav className="flex gap-6">
          <a href="/" className="text-white hover:text-blue-400 transition-colors font-medium">HOME</a>
          {/* Mock Test triggers popup */}
          <button
            className="text-white hover:text-blue-400 transition-colors font-medium bg-transparent border-none outline-none"
            onClick={() => setShowTestModal(true)}
          >
            Mock Test
          </button>
          {/* Mock Interview triggers popup */}
          <button
            className="text-white hover:text-blue-400 transition-colors font-medium bg-transparent border-none outline-none"
            onClick={() => setShowInterviewModal(true)}
          >
            Mock Interview
          </button>
          <a href="/about" className="text-white hover:text-blue-400 transition-colors font-medium">About Us</a>
          <a href="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">Contact Us</a>
        </nav>
      </div>
      {/* Mock Interview Modal Popup */}
      {showInterviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-black/90 rounded-xl shadow-xl p-8 flex flex-col gap-4 min-w-[260px]">
            <button
              className="text-white hover:text-blue-400 text-lg font-semibold transition-colors"
              onClick={() => {
                setShowInterviewModal(false);
                navigate("/mock-interview/TechnicalInterview");
              }}
            >
              Technical Interview
            </button>
            <button
              className="text-white hover:text-blue-400 text-lg font-semibold transition-colors"
              onClick={() => {
                setShowInterviewModal(false);
                navigate("/mock-interview/HrInterview");
              }}
            >
              HR Interview
            </button>
            <button
              className="mt-2 text-red-400 hover:text-red-600 text-sm"
              onClick={() => setShowInterviewModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Mock Test Modal Popup */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-black/90 rounded-xl shadow-xl p-8 flex flex-col gap-4 min-w-[260px]">
            <button
              className="text-white hover:text-blue-400 text-lg font-semibold transition-colors"
              onClick={() => {
                setShowTestModal(false);
                navigate("/mock-test/aptitude");
              }}
            >
              Aptitude Test
            </button>
            <button
              className="text-white hover:text-blue-400 text-lg font-semibold transition-colors"
              onClick={() => {
                setShowTestModal(false);
                navigate("/mock-test/technical");
              }}
            >
              Technical Test
            </button>
            <button
              className="mt-2 text-red-400 hover:text-red-600 text-sm"
              onClick={() => setShowTestModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};