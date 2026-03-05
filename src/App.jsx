import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { L, D } from "./data/content";
import Layout      from "./components/Layout";
import Home        from "./pages/Home";
import Work        from "./pages/Work";
import Experience  from "./pages/Experience";
import Education   from "./pages/Education";
import Skills      from "./pages/Skills";

export default function App() {
  const [isDark, setDark] = useState(false);
  const [cols,   setCols] = useState(3);
  const t = isDark ? D : L;

  // Responsive masonry columns
  useEffect(() => {
    const update = () => {
      if      (window.innerWidth < 600) setCols(1);
      else if (window.innerWidth < 900) setCols(2);
      else                              setCols(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wrap every page in the shared Layout
  const wrap = (page) => (
    <Layout t={t} isDark={isDark} setDark={setDark}>
      {page}
    </Layout>
  );

  return (
    // HashRouter keeps all routing client-side — required for GitHub Pages
    // (GitHub Pages can't handle BrowserRouter's server-side path resolution)
    <HashRouter>
      <Routes>
        <Route path="/"                element={wrap(<Home       t={t}/>)}/>
        <Route path="/work"            element={<Navigate to="/work/animations" replace/>}/>
        <Route path="/work/:section"   element={wrap(<Work       t={t} cols={cols}/>)}/>
        <Route path="/animations"      element={<Navigate to="/work/animations"  replace/>}/>
        <Route path="/photography"     element={<Navigate to="/work/photography" replace/>}/>
        <Route path="/experience"      element={wrap(<Experience t={t}/>)}/>
        <Route path="/education"       element={wrap(<Education  t={t}/>)}/>
        <Route path="/skills"          element={wrap(<Skills     t={t}/>)}/>
        <Route path="*"                element={wrap(<Home       t={t}/>)}/>
      </Routes>
    </HashRouter>
  );
}
