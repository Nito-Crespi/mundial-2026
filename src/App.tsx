import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import esES from "antd/locale/es_ES";
import { Navigation } from "./components/Navigation";
import { MatchesPage } from "./pages/MatchesPage";
import { GroupsPage } from "./pages/GroupsPage";
import { StadiumsPage } from "./pages/StadiumsPage";
import Nito from "./components/Nito";

function App() {
  return (
    <ConfigProvider
      locale={esES}
      theme={{
        token: {
          colorPrimary: "#006847",
          borderRadius: 8,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      }}
    >
      <BrowserRouter>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 16px" }}>
          <div className="header-banner">
            <h1>⚽ Mundial 2026 · Fixture</h1>
            <p>
              Estados Unidos · Canadá · México — del 11 de junio al 19 de julio
              de 2026
            </p>
          </div>

          <Navigation />

          <Routes>
            <Route path="/" element={<MatchesPage />} />
            <Route path="/grupos" element={<GroupsPage />} />
            <Route path="/estadios" element={<StadiumsPage />} />
          </Routes>

          <div
            style={{
              marginTop: 40,
              padding: 16,
              textAlign: "center",
              color: "#94a3b8",
              fontSize: 12,
            }}
          >
            Todos los horarios mostrados están en hora del Este de Estados
            Unidos (ET).
          </div>
        </div>
        <Nito />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
