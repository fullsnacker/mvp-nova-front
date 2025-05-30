import { Job } from "@/types";
import { v4 as uuidv4 } from "uuid";

// Sample logos for demo purposes
const sampleLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
];

export const DEFAULT_JOBS: Job[] = [
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "TEST",
    company: "TEST Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
];

export const DEFAULT_JOBS2: Job[] = [
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "TEST",
    company: "TEST Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "TEST",
    company: "TEST Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "TEST",
    company: "TEST Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "TEST",
    company: "TEST Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/23/2025, 03:01:35 PM",
    postDate: "2025-04-23",
    position: "Senior Frontend Developer",
    company: "TechGiant Corp",
    location: "San Francisco, CA",
    jobUrl: "https://example.com/job1",
    easyApply: "Apply Now",
    parsedDateAgo: "04/23/2025, 09:01:35 AM",
    dateAgoString: "6 hours ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/22/2025, 01:30:00 PM",
    postDate: "2025-04-22",
    position: "Full Stack Developer",
    company: "StartupX",
    location: "Remote",
    jobUrl: "https://example.com/job2",
    easyApply: "",
    parsedDateAgo: "04/22/2025, 01:30:00 PM",
    dateAgoString: "1 day ago",
    status: "To Review",
    companyLogo: sampleLogos[1],
  },
  {
    id: uuidv4(),
    searchDate: "04/21/2025, 10:15:20 AM",
    postDate: "2025-04-21",
    position: "React Native Developer",
    company: "MobileTech Inc",
    location: "New York, NY",
    jobUrl: "https://example.com/job3",
    easyApply: "Apply Now",
    parsedDateAgo: "04/21/2025, 10:15:20 AM",
    dateAgoString: "2 days ago",
    status: "To Review",
    companyLogo: sampleLogos[2],
  },
  {
    id: uuidv4(),
    searchDate: "04/20/2025, 08:45:12 AM",
    postDate: "2025-04-20",
    position: "Backend Engineer",
    company: "ServerPro",
    location: "Seattle, WA",
    jobUrl: "https://example.com/job4",
    easyApply: "Apply Now",
    parsedDateAgo: "04/20/2025, 08:45:12 AM",
    dateAgoString: "3 days ago",
    status: "To Review",
    companyLogo: sampleLogos[3],
  },
  {
    id: uuidv4(),
    searchDate: "04/19/2025, 03:20:45 PM",
    postDate: "2025-04-19",
    position: "DevOps Specialist",
    company: "CloudTech Solutions",
    location: "Austin, TX",
    jobUrl: "https://example.com/job5",
    easyApply: "",
    parsedDateAgo: "04/19/2025, 03:20:45 PM",
    dateAgoString: "4 days ago",
    status: "Rejected",
    companyLogo: sampleLogos[4],
  },
  {
    id: uuidv4(),
    searchDate: "04/18/2025, 11:30:00 AM",
    postDate: "2025-04-18",
    position: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    jobUrl: "https://example.com/job6",
    easyApply: "Apply Now",
    parsedDateAgo: "04/18/2025, 11:30:00 AM",
    dateAgoString: "5 days ago",
    status: "Accepted",
    companyLogo: sampleLogos[5],
  },
  {
    id: uuidv4(),
    searchDate: "04/17/2025, 09:15:30 AM",
    postDate: "2025-04-17",
    position: "Data Scientist",
    company: "DataCorp",
    location: "Chicago, IL",
    jobUrl: "https://example.com/job7",
    easyApply: "Apply Now",
    parsedDateAgo: "04/17/2025, 09:15:30 AM",
    dateAgoString: "6 days ago",
    status: "To Review",
    companyLogo: sampleLogos[0],
  },
  {
    id: uuidv4(),
    searchDate: "04/16/2025, 02:45:20 PM",
    postDate: "2025-04-16",
    position: "Product Manager",
    company: "ProductX",
    location: "Boston, MA",
    jobUrl: "https://example.com/job8",
    easyApply: "",
    parsedDateAgo: "04/16/2025, 02:45:20 PM",
    dateAgoString: "1 week ago",
    status: "To Review",
    companyLogo: sampleLogos[1],
  },
  {
    id: uuidv4(),
    searchDate: "04/15/2025, 10:30:15 AM",
    postDate: "2025-04-15",
    position: "QA Engineer",
    company: "QualityTech",
    location: "Denver, CO",
    jobUrl: "https://example.com/job9",
    easyApply: "Apply Now",
    parsedDateAgo: "04/15/2025, 10:30:15 AM",
    dateAgoString: "1 week ago",
    status: "Rejected",
    companyLogo: sampleLogos[2],
  },
  {
    id: uuidv4(),
    searchDate: "04/14/2025, 09:00:00 AM",
    postDate: "2025-04-14",
    position: "Technical Writer",
    company: "DocuTech",
    location: "Portland, OR",
    jobUrl: "https://example.com/job10",
    easyApply: "Apply Now",
    parsedDateAgo: "04/14/2025, 09:00:00 AM",
    dateAgoString: "1 week ago",
    status: "To Review",
    companyLogo: sampleLogos[3],
  },
  {
    id: uuidv4(),
    searchDate: "04/13/2025, 01:15:30 PM",
    postDate: "2025-04-13",
    position: "Security Analyst",
    company: "SecureTech",
    location: "Washington, DC",
    jobUrl: "https://example.com/job11",
    easyApply: "",
    parsedDateAgo: "04/13/2025, 01:15:30 PM",
    dateAgoString: "1 week ago",
    status: "To Review",
    companyLogo: sampleLogos[4],
  },
  {
    id: uuidv4(),
    searchDate: "04/12/2025, 11:45:00 AM",
    postDate: "2025-04-12",
    position: "Blockchain Developer",
    company: "ChainWorks",
    location: "Miami, FL",
    jobUrl: "https://example.com/job12",
    easyApply: "Apply Now",
    parsedDateAgo: "04/12/2025, 11:45:00 AM",
    dateAgoString: "1 week ago",
    status: "Accepted",
    companyLogo: sampleLogos[5],
  },
];

export const LOCAL_STORAGE_KEY = "nova_jobs";
