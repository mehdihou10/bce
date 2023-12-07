import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LetsStartAQuote from "./pages/LetsStartAQuote";
import TruckTypeFilter from './components/TruckTypeFilter';
import Descrio from "./pages/Descrio";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import MobileView from "./pages/MobileView";
import MobileView1 from "./pages/MobileView1";
import MobileView2 from "./pages/MobileView2";
import MobileView3 from "./pages/MobileView3";
import MobileView4 from "./pages/MobileView4";
import MobileView5 from "./pages/MobileView5";
import MobileView6 from "./pages/MobileView6";
import MobileView7 from "./pages/MobileView7";
import MobileView8 from "./pages/MobileView8";
import MobileView9 from "./pages/MobileView9";
import MobileView10 from "./pages/MobileView10";
import LetsStartAQuote1 from "./pages/LetsStartAQuote1";
import LetsStartAQuote2 from "./pages/LetsStartAQuote2";
import LetsStartAQuote3 from "./pages/LetsStartAQuote3";
import LetsStartAQuote4 from "./pages/LetsStartAQuote4";
import LetsStartAQuote5 from "./pages/LetsStartAQuote5";
import LetsStartAQuote6 from "./pages/LetsStartAQuote6";
import LetsStartAQuote7 from "./pages/LetsStartAQuote7";
import LetsStartAQuote8 from "./pages/LetsStartAQuote8";
import LetsStartAQuote9 from "./pages/LetsStartAQuote9";
import LetsStartAQuote10 from "./pages/LetsStartAQuote10";
import LetsStartAQuote11 from "./pages/LetsStartAQuote11";

function App() {


  return (
    <Routes>

      <Route path="/" element={<LetsStartAQuote11 />} />


      {/* mobile  */}
      <Route path="/frame-16493" element={<Frame />} />
      <Route path="/frame-16492" element={<Frame1 />} />
      <Route path="/mobile-view" element={<MobileView />} /> {/*mobile + desktop*/}
      <Route path="/mobile-view1" element={<MobileView1 />} /> 
      <Route path="/mobile-view2" element={<MobileView2 />} />
      <Route path="/mobile-view3" element={<MobileView3 />} />
      <Route path="/mobile-view4" element={<MobileView4 />} />
      <Route path="/mobile-view5" element={<MobileView5 />} />
      <Route path="/mobile-view6" element={<MobileView6 />} />
      <Route path="/mobile-view7" element={<MobileView7 />} />
      <Route path="/mobile-view8" element={<MobileView8 />} />
      <Route path="/mobile-view9" element={<MobileView9 />} />
      <Route path="/mobile-view10" element={<MobileView10 />} />

      {/* desctop */}
      <Route path="/lets-start-a-quote" element={<LetsStartAQuote1 />} />
      <Route path="/lets-start-a-quote1" element={<LetsStartAQuote2 />} />
      <Route path="/lets-start-a-quote2" element={<LetsStartAQuote3 />} />
      <Route path="/lets-start-a-quote3" element={<LetsStartAQuote4 />} />
      <Route path="/lets-start-a-quote4" element={<LetsStartAQuote5 />} />
      <Route path="/lets-start-a-quote5" element={<LetsStartAQuote6 />} />
      <Route path="/lets-start-a-quote6" element={<LetsStartAQuote7 />} />
      <Route path="/lets-start-a-quote7" element={<LetsStartAQuote8 />} />
      <Route path="/lets-start-a-quote8" element={<LetsStartAQuote9 />} />
      <Route path="/lets-start-a-quote9" element={<LetsStartAQuote10 />} />
      <Route path="/lets-start-a-quote10" element={<TruckTypeFilter />} />
    </Routes>
  );
}
export default App;
