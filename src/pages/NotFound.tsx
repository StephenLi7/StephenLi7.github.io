import { usePageTitle } from "@/hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Stephen Li | Page Not Found");

  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page not found</p>
        <a
          href="/"
          className="text-[#cbf3f0] hover:text-white underline transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
