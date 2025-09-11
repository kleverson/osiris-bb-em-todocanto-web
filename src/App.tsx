import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Finalistas } from "./pages/Finalistas";
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
            path="/finalistas"
            element={
              <ProtectedRoute requireAuth={false}>
                <Finalistas />
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
