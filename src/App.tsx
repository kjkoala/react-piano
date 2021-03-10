import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import "./App.css";
import { Main } from "./components/Main/Main";
export const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  );
};
