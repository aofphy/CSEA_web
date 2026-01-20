import React, { createContext, useContext, useState, useEffect } from "react";

// Types
export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  isNew: boolean;
}

export interface HallOfFameItem {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface PublicationItem {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

interface DataContextType {
  news: NewsItem[];
  partners: any[]; // Assuming partners are static for now or similar structure
  hallOfFame: HallOfFameItem[];
  publications: PublicationItem[];
  addNews: (item: Omit<NewsItem, "id">) => void;
  updateNews: (item: NewsItem) => void;
  deleteNews: (id: number) => void;
  addHallOfFame: (item: Omit<HallOfFameItem, "id">) => void;
  updateHallOfFame: (item: HallOfFameItem) => void;
  deleteHallOfFame: (id: number) => void;
  addPublication: (item: Omit<PublicationItem, "id">) => void;
  updatePublication: (item: PublicationItem) => void;
  deletePublication: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Initial Data
const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "ANSCSE27: Faculty of Engineering, Chulalongkorn University",
    description: "We are delighted to extend an invitation for you to participate in the 27th International Annual Symposium on Computational Science and Engineering (ANSCSE27).",
    date: "2024",
    category: "Conference",
    isNew: true,
  },
  {
    id: 2,
    title: "ANSCSE26: Special issue Bangmod J-MCS",
    description: "Special issue including selected papers presented to ANSCSE26. Participants are invited to submit their contributions to Bangmod J-MCS.",
    date: "มีนาคม 2023",
    category: "Publication",
    isNew: false,
  },
  {
    id: 3,
    title: "CSEA Pioneer Award 2023: Prof. Dr. Supot Hannongbua",
    description: "Professor Dr. Supot HANNONGBUA is a renowned computational chemist and materials scientist in Thailand with over 205 publications.",
    date: "2023",
    category: "Award",
    isNew: false,
  },
  {
    id: 4,
    title: "ประกาศรายชื่อสมาชิกประเภทบุคคล ประจำปี 2566",
    description: "รายชื่อสมาชิกที่ได้รับการอนุมัติจากคณะกรรมการบริหารสมาคม ประจำปี 2566 จำนวน 20 ท่าน",
    date: "2023",
    category: "Announcement",
    isNew: false,
  },
];

const initialHallOfFame: HallOfFameItem[] = [
  {
    id: 1,
    name: "Prof. Dr. Supot Hannongbua",
    role: "CSEA Pioneer Award 2023",
    description: "For his outstanding contribution to computational chemistry in Thailand.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Prof. Dr. Vudhichai Parasuk",
    role: "CSEA Pioneer Award 2023",
    description: "For his dedication to advancing computational science education.",
    image: "/placeholder.svg"
  },
];

const initialPublications: PublicationItem[] = [
  {
    id: 1,
    title: "Bangmod Journal of Mathematics and Computational Science (Bangmod J-MCS)",
    description:
      "A peer-reviewed journal publishing original research in mathematics and computational science. Special issues often feature selected papers from ANSCSE.",
    url: "#",
    tags: ["Mathematics", "Computational Science"],
  },
  {
    id: 2,
    title: "Computational Science and Engineering Journal",
    description:
      "Focuses on advanced computational methods and their applications in engineering and science projects.",
    url: "#",
    tags: ["Engineering", "Simulation"],
  },
];

export function DataProvider({ children }: { children: React.ReactNode }) {
  // Load from LocalStorage if available, else use initial
  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem("csea_news");
    return saved ? JSON.parse(saved) : initialNews;
  });

  const [hallOfFame, setHallOfFame] = useState<HallOfFameItem[]>(() => {
    const saved = localStorage.getItem("csea_hall_of_fame");
    return saved ? JSON.parse(saved) : initialHallOfFame;
  });

  const [publications, setPublications] = useState<PublicationItem[]>(() => {
    const saved = localStorage.getItem("csea_publications");
    return saved ? JSON.parse(saved) : initialPublications;
  });

  // Persist to LocalStorage
  useEffect(() => localStorage.setItem("csea_news", JSON.stringify(news)), [news]);
  useEffect(() => localStorage.setItem("csea_hall_of_fame", JSON.stringify(hallOfFame)), [hallOfFame]);
  useEffect(() => localStorage.setItem("csea_publications", JSON.stringify(publications)), [publications]);

  const addNews = (item: Omit<NewsItem, "id">) => {
    setNews(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const updateNews = (item: NewsItem) => {
    setNews(prev => prev.map(i => i.id === item.id ? item : i));
  };

  const deleteNews = (id: number) => {
    setNews(prev => prev.filter(i => i.id !== id));
  };

  const addHallOfFame = (item: Omit<HallOfFameItem, "id">) => {
    setHallOfFame(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const updateHallOfFame = (item: HallOfFameItem) => {
    setHallOfFame(prev => prev.map(i => i.id === item.id ? item : i));
  };

  const deleteHallOfFame = (id: number) => {
    setHallOfFame(prev => prev.filter(i => i.id !== id));
  };

  const addPublication = (item: Omit<PublicationItem, "id">) => {
    setPublications(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const updatePublication = (item: PublicationItem) => {
    setPublications(prev => prev.map(i => i.id === item.id ? item : i));
  };

  const deletePublication = (id: number) => {
    setPublications(prev => prev.filter(i => i.id !== id));
  };

  return (
    <DataContext.Provider value={{
      news, partners: [], hallOfFame, publications,
      addNews, updateNews, deleteNews,
      addHallOfFame, updateHallOfFame, deleteHallOfFame,
      addPublication, updatePublication, deletePublication
    }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
