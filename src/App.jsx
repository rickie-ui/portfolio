import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div className="min-h-screen w-full  bg-[#131D3D] font-medium text-white/80 antialiased">
      <Navigation />
      <Routes>
        <Route path="/" index element={<Container />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
