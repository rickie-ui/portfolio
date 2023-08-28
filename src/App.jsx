import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
const App = () => {
  return (
    <div className="min-h-screen w-full  bg-[#131D3D] font-medium text-white/80 antialiased">
      <Navigation />
      <Routes>
        <Route path="/" index element={<Container />} />
      </Routes>
    </div>
  );
};

export default App;
