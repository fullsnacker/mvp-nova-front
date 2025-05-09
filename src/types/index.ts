export type JobStatus = "To Review" | "Rejected" | "Accepted";

export interface Job {
  id?: string;
  searchDate: string;
  postDate: string;
  position: string;
  company: string;
  location: string;
  jobUrl: string;
  easyApply: string;
  parsedDateAgo: string;
  dateAgoString: string;
  status?: JobStatus;
  companyLogo?: string;
  timeDiffInMinutes?: string;
}
