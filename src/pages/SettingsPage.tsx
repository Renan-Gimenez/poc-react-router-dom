import { Home } from "lucide-react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function SettingsPage() {
  return (
    <main className="h-screen flex flex-col items-center">
      <Header>
        <h1>Settings Page</h1>
        <Button path="/">
          <Home className="size-3" />
          Home
        </Button>
      </Header>

      <div className="py-20">
        <span>Settings</span>
      </div>
    </main>
  );
}
