import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const Header = lazy(() => import("./component/Header"))
const Hero = lazy(() => import("./component/Hero"))
const About = lazy(() => import("./component/About"))
const Projects = lazy(() => import("./component/Projects"))
const Contact = lazy(() => import("./component/Contact"))
const StarsCanvas = lazy(() => import("./component/canvas/Stars"))
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
        <div className='bg-primary overflow-hidden' >
          <Header />
          <Hero />
          <About />
          <Projects />
          <div className='pb-80 lg:pb-7 px-2 relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <SpeedInsights />
        </div>
    </BrowserRouter>

  )
}