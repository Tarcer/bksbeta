import {
  Routes,
  Route,
} from "react-router-dom";
import BackstormHome from "./components/BackstormHome";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Myre from "./components/Myre";
import NavBar from "./components/NavBar";
import NavVariation from "./Assets/NavVariation";
import PrivateHome from "./components/privatehome";
import Private from "./components/Private";
import ProductPage from "./components/ProductPage";
import Entreprise from "./components/Entreprise";

function App() {
  return (
    <>
    <SignUpModal />
    <SignInModal />
    <NavBar />
    <NavVariation />
    <Routes>
      <Route path="/" element={<BackstormHome />} />
      <Route path="/Myre" element={<Myre />} />
      <Route path="/private" element={<Private />} />
      <Route path="/private-home" element={<PrivateHome />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/Entreprise" element={<Entreprise />} />
    </Routes>
    </>
  );
}
export default App;
