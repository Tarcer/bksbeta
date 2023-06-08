import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from "./pages/Private/Private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import ProductPage from "./pages/ProductPage";
import Myre from './pages/Myre';
import Entreprise from './pages/Entreprise';
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Entreprise' element={<Entreprise/>}/>
        <Route path='/Myre' element={<Myre/>}/>
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
      <Navbar2 />
    </>
  );
}

export default App;

