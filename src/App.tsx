import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Logged } from "./pages/Logged";
import { Finalistas } from "./pages/Finalistas";
import { AoVivo } from "./pages/AoVivo";
import { Votar } from "./pages/Votar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute requireAuth={false}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logged"
            element={
              <ProtectedRoute requireAuth={true}>
                <Logged />
              </ProtectedRoute>
            }
          />
          <Route
            path="/finalistas"
            element={
              <ProtectedRoute requireAuth={false}>
                <Finalistas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ao-vivo"
            element={
              <ProtectedRoute requireAuth={false}>
                <AoVivo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/votar"
            element={
              <ProtectedRoute requireAuth={false}>
                <Votar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
