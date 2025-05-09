import { useJobs } from "@/contexts/JobContext";
import { useState } from "react";
import { Job, JobStatus } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Footer } from "react-day-picker";

export function JobsTable() {
  const { filteredJobs, updateJobStatus } = useJobs();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (
    jobId: string | undefined,
    newStatus: JobStatus
  ) => {
    if (jobId) {
      updateJobStatus(jobId, newStatus);
    }
  };

  const getStatusBadgeClass = (status: JobStatus | undefined) => {
    if (!status) return "status-to-review";

    switch (status) {
      case "To Review":
        return "status-to-review";
      case "Rejected":
        return "status-rejected";
      case "Accepted":
        return "status-accepted";
      default:
        return "status-to-review";
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]"></TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Minutes</TableHead>
              <TableHead className="hidden w-[110px] sm:table-cell">
                Status
              </TableHead>
              <TableHead className="w-[180px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentJobs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-10 text-muted-foreground"
                >
                  No job listings found matching your criteria
                </TableCell>
              </TableRow>
            ) : (
              currentJobs.map((job: Job) => (
                <TableRow key={job.id}>
                  <TableCell>
                    <a
                      // href={job.jobUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-10 h-10"
                    >
                      {job.companyLogo ? (
                        <img
                          src={job.companyLogo}
                          alt={`${job.company} logo`}
                          className="w-10 h-10 object-contain rounded"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                          {job.company.charAt(0)}
                        </div>
                      )}
                    </a>
                  </TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <a
                        href={job.jobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <span className="text-sm">{job.position}</span>
                        {job.easyApply && (
                          <span className="text-xs px-1.5 py-0.5 rounded inline-flex items-center easy-apply-badge w-fit mt-1">
                            Easy Apply
                          </span>
                        )}
                      </a>
                    </div>
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    {job.location}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                    {job.parsedDateAgo}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                    {job.dateAgoString}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getStatusBadgeClass(
                        job.status
                      )}`}
                    >
                      {job.status || "To Review"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={
                          job.status !== "To Review"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                            : "hidden"
                        }
                        onClick={() => handleStatusChange(job.id, "To Review")}
                      >
                        Review
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={
                          job.status !== "Accepted"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            : "hidden"
                        }
                        onClick={() => handleStatusChange(job.id, "Accepted")}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={
                          job.status !== "Rejected"
                            ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                            : "hidden"
                        }
                        onClick={() => handleStatusChange(job.id, "Rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {filteredJobs.length > jobsPerPage && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => handlePageChange(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <footer className="mt-3 text-center text-sm"><a href="https://fullsnacker.github.io" target="_blank" className="text-blue-600">Fullsnacker</a> - 2025</footer>
    </div>
  );
}
