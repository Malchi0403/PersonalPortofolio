import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < progress) {
          return prev + 1; // Tambahkan secara perlahan
        }
        return prev;
      });
    }, 20); // Update setiap 20ms untuk efek smooth

    return () => clearInterval(interval);
  }, [progress]);

  return (
      <div className="flex flex-col  text-center items-center bg-transparent text-white p-4 rounded-lg">
        <p className="text-lg text-fuchsia-800">Loading...</p>
        <p className="text-2xl font-bold text-fuchsia-800">{displayProgress}%</p>
      </div>
  );
};

export default LoadingScreen