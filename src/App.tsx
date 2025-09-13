import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Votar } from "./pages/Votar";
import { Classificados } from "./pages/Classificados";

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
            path="/classificados"
            element={
              <ProtectedRoute requireAuth={false}>
                <Classificados />
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

      {/* Configuração do ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  );
}

export default App;
