import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './component/Hero';

const Header = lazy(() => import("./component/Header"));
const About = lazy(() => import("./component/About"));
const Projects = lazy(() => import("./component/Projects"));
const Contact = lazy(() => import("./component/Contact"));
const StarsCanvas = lazy(() => import("./component/canvas/Stars"));

export default function App() {
  const [reactReady, setReactReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}, []);

useLayoutEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);
  useEffect(() => {
    requestAnimationFrame(() => {
      setReactReady(true);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1800); // 🔥 atur: 1.5s – 2s ideal

    return () => clearTimeout(timer);
  }, []);

  // ✅ hide loader kalau dua-duanya siap
  useEffect(() => {
    if (!reactReady || !minTimePassed) return;

    const loader = document.getElementById("initial-loader");

    if (loader) {
      loader.classList.add("hide");

      setTimeout(() => {
        loader.remove();
        document.body.style.overflow = "auto";
      }, 800);
    }
  }, [reactReady, minTimePassed]);

  return (
    <BrowserRouter>
      <div className={`bg-primary relative z-0 transition-opacity duration-700 ${reactReady ? "opacity-100" : "opacity-0"}`}>

        {/* UI dulu */}
        <Suspense fallback={null}>
          <Header />
          <Hero />
          <About />
          <Projects />

            <Contact />
        </Suspense>

        {/* Canvas belakangan */}

          <div className="fixed inset-0 -z-10 pointer-events-none">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}