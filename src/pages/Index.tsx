
import { JobFilters } from "@/components/JobFilters";
import { JobsTable } from "@/components/JobsTable";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Job Dashboard</h2>
            <p className="text-muted-foreground">Track and manage your job applications in one place.</p>
          </div>
          <JobFilters />
          <JobsTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
