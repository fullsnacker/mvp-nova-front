
import { useJobs } from "@/contexts/JobContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function JobFilters() {
  const { setTextFilter, setStatusFilter, statusFilter } = useJobs();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilter(e.target.value);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
      <div className="flex-1">
        <Label htmlFor="search" className="sr-only">Search Jobs</Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search position, company, or location..."
            className="pl-8"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="w-full sm:w-48">
        <Label htmlFor="status-filter" className="sr-only">Filter by status</Label>
        <Select value={statusFilter} onValueChange={handleStatusChange}>
          <SelectTrigger id="status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="To Review">To Review</SelectItem>
            <SelectItem value="Accepted">Accepted</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
