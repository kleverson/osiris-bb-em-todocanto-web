import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Logged } from "./pages/Logged";
import { Finalistas } from "./pages/Finalistas";

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
            path="/logged"
            element={
              <ProtectedRoute requireAuth={true}>
                <Logged />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
