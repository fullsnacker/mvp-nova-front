/* eslint-disable react-hooks/exhaustive-deps */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Job, JobStatus } from "@/types";
import axios from "axios";
import { DEFAULT_JOBS } from "@/constants";
import { toast } from "@/components/ui/use-toast";

interface JobContextType {
  jobs: Job[];
  filteredJobs: Job[];
  statusFilter: string;
  textFilter: string;
  hasNewJobs: boolean;
  lastUpdated: string;
  loading: boolean;
  setStatusFilter: (status: string) => void;
  setTextFilter: (text: string) => void;
  updateJobStatus: (jobId: string, status: JobStatus) => void;
  resetToDefaults: () => void;
  downloadJobsAsJson: () => void;
  clearNotification: () => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("To Review");
  const [textFilter, setTextFilter] = useState<string>("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [hasNewJobs, setHasNewJobs] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Filter jobs when filters or jobs change
  useEffect(() => {
    let result = jobs;

    // Apply status filter
    if (statusFilter !== "All") {
      result = result.filter((job) => job.status === statusFilter);
    }

    // Apply text filter
    if (textFilter) {
      const searchText = textFilter.toLowerCase();
      result = result.filter(
        (job) =>
          job.position.toLowerCase().includes(searchText) ||
          job.company.toLowerCase().includes(searchText) ||
          job.location.toLowerCase().includes(searchText)
      );
    }

    // Sort by post date (newest first)
    result = [...result].sort(
      (a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
    );

    setFilteredJobs(result);
  }, [jobs, statusFilter, textFilter]);

  // Mock polling for new jobs
  useEffect(() => {
    // Set up polling every 2 minutes
    const interval = setInterval(() => {
      checkForNewJobs();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [jobs]);

  useEffect(() => {
    checkForNewJobs();
  
  }, [])
  

  // Simulated function to check for new jobs
  const checkForNewJobs = () => {
    console.log("Checking for recent jobs...");
    setLoading(true);
    //creation an axios call
    axios
      .get(`${import.meta.env.VITE_NOVA_API_URL}/getPositions`)
      .then((response) => {
        const newJobs = response.data;

        const existingIds = new Set(jobs.map((job) => job.id));
        const filteredJobs = newJobs.filter((job) => !existingIds.has(job.id));
        const completeJobs = [...jobs, ...filteredJobs];

        //calculate timeDiffInMinutes for each complete job
        completeJobs.forEach((job) => {
          const postDate = new Date(job.parsedDateAgo);
          const currentDate = new Date();
          const timeDiffInMinutes = Math.floor(
            (currentDate.getTime() - postDate.getTime()) / 60000
          );
          if (timeDiffInMinutes >= 60) {
            job.dateAgoString = `${Math.floor(
              timeDiffInMinutes / 60
            )} hours ago`;
          } else {
            job.dateAgoString = `${timeDiffInMinutes} minutes ago`;
          }
          job.timeDiffInMinutes = timeDiffInMinutes;
        });

        if (filteredJobs.length > 0) {
          console.log("Sorting");
          //sort complete jobs by timeDiffInMinutes
          completeJobs.sort(
            (a, b) =>
              new Date(a.timeDiffInMinutes).getTime() -
              new Date(b.timeDiffInMinutes).getTime()
          );

          setHasNewJobs(true);
          playNotificationSound();
          toast({
            title: `New Job/s Listing`,
            description: `${filteredJobs.length} Added`,
            // description: `${newJobs[0].position} at ${newJobs[0].company}`,
            duration: 5000,
          });
        }
        setJobs(completeJobs);
        setLastUpdated(
          new Date().toLocaleString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching new jobs:", error);
      });
  };

  const playNotificationSound = () => {
    try {
      const audio = new Audio("/notification.mp3");
      audio.volume = 0.3;
      audio.play().catch((e) => console.log("Audio play failed:", e));
    } catch (error) {
      console.log("Failed to play notification sound");
    }
  };

  const updateJobStatus = (jobId: string, status: JobStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === jobId ? { ...job, status } : job))
    );
    clearNotification();

    //make an axios call to update the status in the backend
    axios
      .post(`${import.meta.env.VITE_NOVA_API_URL}/updateJobStatus`, { id: jobId, status })
      .then((response) => {
        console.log("Job status updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating job status:", error);
      });
    toast({
      title: "Job Status Updated",
      description: `Job status has been updated to ${status}`,
      duration: 5000,
    });
  };

  const resetToDefaults = () => {
    setJobs(DEFAULT_JOBS);
    setStatusFilter("To Review");
    setTextFilter("");
    toast({
      title: "Reset Complete",
      description: "All job data has been reset to defaults",
      duration: 5000,
    });
  };

  const downloadJobsAsJson = () => {
    const jsonString = JSON.stringify(jobs, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "nova_jobs.json";
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: "Your jobs data has been downloaded as JSON",
    });
  };

  const clearNotification = () => {
    setHasNewJobs(false);
  };

  const value = {
    jobs,
    filteredJobs,
    statusFilter,
    textFilter,
    hasNewJobs,
    lastUpdated,
    loading,
    setStatusFilter,
    setTextFilter,
    updateJobStatus,
    resetToDefaults,
    downloadJobsAsJson,
    clearNotification,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
