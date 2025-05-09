import { useTheme } from "@/contexts/ThemeContext";
import { useJobs } from "@/contexts/JobContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Bell, Download, RotateCcw } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const {
    hasNewJobs,
    lastUpdated,
    loading,
    clearNotification,
    resetToDefaults,
    downloadJobsAsJson,
  } = useJobs();

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-primary">Nova</span> Job Stream
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {loading
            ? "Loading..."
            : lastUpdated
            ? `Last updated: ${lastUpdated}`
            : ""}
          {hasNewJobs && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearNotification}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <div className="notification-dot absolute -top-1 -right-1">
                <span></span>
                <span></span>
              </div>
            </Button>
          )}
          {/* <Button variant="outline" size="icon" onClick={resetToDefaults}>
            <RotateCcw className="h-5 w-5" />
          </Button> */}
          <Button variant="outline" size="icon" onClick={downloadJobsAsJson}>
            <Download className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
