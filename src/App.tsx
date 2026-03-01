import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import CasesPage from "./pages/CasesPage";
import OpenCasePage from "./pages/OpenCasePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ProfilePage from "./pages/ProfilePage";
import ContactsPage from "./pages/ContactsPage";
import Navbar from "./components/Navbar";

export type Page = "home" | "cases" | "open" | "leaderboard" | "profile" | "contacts";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const navigate = (page: Page, caseId?: string) => {
    setCurrentPage(page);
    if (caseId) setSelectedCase(caseId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background font-rubik">
        <Navbar currentPage={currentPage} navigate={navigate} />
        <main>
          {currentPage === "home" && <HomePage navigate={navigate} />}
          {currentPage === "cases" && <CasesPage navigate={navigate} />}
          {currentPage === "open" && <OpenCasePage caseId={selectedCase} navigate={navigate} />}
          {currentPage === "leaderboard" && <LeaderboardPage navigate={navigate} />}
          {currentPage === "profile" && <ProfilePage navigate={navigate} />}
          {currentPage === "contacts" && <ContactsPage navigate={navigate} />}
        </main>
      </div>
    </TooltipProvider>
  );
}
