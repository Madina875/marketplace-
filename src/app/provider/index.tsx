import { memo, Suspense, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p className="text-gray-400 text-xl animate-pulse">Loading...</p>
          </div>
        }
      >
        {children}
      </Suspense>
    </BrowserRouter>
  );
};

export default memo(Provider);
