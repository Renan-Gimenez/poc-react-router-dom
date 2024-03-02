import { useNavigate } from "react-router-dom";
import { Button } from "./components/Button";
import { Settings } from "lucide-react";
import { Header } from "./components/Header";

function App() {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/settings");
  };

  return (
    <main className="h-screen flex flex-col items-center">
      <Header>
        <h1>Main Page</h1>
        <Button path="/settings">
          <Settings className="size-4" />
          Settings
        </Button>
      </Header>

      <div className="py-20">
        <button
          className="flex items-center gap-2 bg-violet-500 text-teal-50 py-1 px-4 rounded-full"
          onClick={redirectUser}
        >
          Redirect using useNavigate
        </button>
      </div>
    </main>
  );
}

export default App;
