import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/homepage";
import SecretPage from "../components/pages/secret-page";
import RoutesIndex from "../components/routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutesIndex />}>
          <Route index element={<HomePage />} />
          <Route path="secret" element={<SecretPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
