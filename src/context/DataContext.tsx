import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

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
  partners: any[]; 
  hallOfFame: HallOfFameItem[];
  publications: PublicationItem[];
  addNews: (item: Omit<NewsItem, "id">) => Promise<void>;
  updateNews: (item: NewsItem) => Promise<void>;
  deleteNews: (id: number) => Promise<void>;
  addHallOfFame: (item: Omit<HallOfFameItem, "id">) => Promise<void>;
  updateHallOfFame: (item: HallOfFameItem) => Promise<void>;
  deleteHallOfFame: (id: number) => Promise<void>;
  addPublication: (item: Omit<PublicationItem, "id">) => Promise<void>;
  updatePublication: (item: PublicationItem) => Promise<void>;
  deletePublication: (id: number) => Promise<void>;
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [hallOfFame, setHallOfFame] = useState<HallOfFameItem[]>([]);
  const [publications, setPublications] = useState<PublicationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Data from Supabase
  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        console.warn("Supabase URL not set, skipping fetch");
        setIsLoading(false);
        return;
      }

      // Fetch News
      const { data: newsData, error: newsError } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (newsError) throw newsError;
      if (newsData) {
        setNews(newsData.map((item: any) => ({
          ...item,
          isNew: item.is_new // Map snake_case to camelCase
        })));
      }

      // Fetch Hall of Fame
      const { data: hofData, error: hofError } = await supabase
        .from("hall_of_fame")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (hofError) throw hofError;
      if (hofData) setHallOfFame(hofData);

      // Fetch Publications
      const { data: pubData, error: pubError } = await supabase
        .from("publications")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (pubError) throw pubError;
      if (pubData) setPublications(pubData);

    } catch (error: any) {
      console.error("Error fetching data:", error);
      // Fallback to empty or initial data if needed, simplified here
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- Actions ---

  const addNews = async (item: Omit<NewsItem, "id">) => {
    const { error } = await supabase.from("news").insert([{
      title: item.title,
      description: item.description,
      date: item.date,
      category: item.category,
      is_new: item.isNew
    }]);

    if (error) {
      toast.error("Failed to add news: " + error.message);
    } else {
      toast.success("News added successfully");
      fetchData();
    }
  };

  const updateNews = async (item: NewsItem) => {
    const { error } = await supabase.from("news").update({
      title: item.title,
      description: item.description,
      date: item.date,
      category: item.category,
      is_new: item.isNew
    }).eq('id', item.id);

    if (error) {
      toast.error("Failed to update news: " + error.message);
    } else {
      toast.success("News updated successfully");
      fetchData();
    }
  };

  const deleteNews = async (id: number) => {
    const { error } = await supabase.from("news").delete().eq('id', id);
    if (error) {
      toast.error("Failed to delete news: " + error.message);
    } else {
      toast.success("News deleted successfully");
      fetchData();
    }
  };

  const addHallOfFame = async (item: Omit<HallOfFameItem, "id">) => {
    const { error } = await supabase.from("hall_of_fame").insert([{
      name: item.name,
      role: item.role,
      description: item.description,
      image: item.image
    }]);

    if (error) {
      toast.error("Failed to add entry: " + error.message);
    } else {
      toast.success("Entry added successfully");
      fetchData();
    }
  };

  const updateHallOfFame = async (item: HallOfFameItem) => {
    const { error } = await supabase.from("hall_of_fame").update({
      name: item.name,
      role: item.role,
      description: item.description,
      image: item.image
    }).eq("id", item.id);

    if (error) {
      toast.error("Failed to update entry: " + error.message);
    } else {
      toast.success("Entry updated successfully");
      fetchData();
    }
  };

  const deleteHallOfFame = async (id: number) => {
    const { error } = await supabase.from("hall_of_fame").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete entry: " + error.message);
    } else {
      toast.success("Entry deleted successfully");
      fetchData();
    }
  };

  const addPublication = async (item: Omit<PublicationItem, "id">) => {
    const { error } = await supabase.from("publications").insert([{
      title: item.title,
      description: item.description,
      url: item.url,
      tags: item.tags
    }]);

    if (error) {
      toast.error("Failed to add publication: " + error.message);
    } else {
      toast.success("Publication added successfully");
      fetchData();
    }
  };

  const updatePublication = async (item: PublicationItem) => {
    const { error } = await supabase.from("publications").update({
      title: item.title,
      description: item.description,
      url: item.url,
      tags: item.tags
    }).eq("id", item.id);

    if (error) {
      toast.error("Failed to update publication: " + error.message);
    } else {
      toast.success("Publication updated successfully");
      fetchData();
    }
  };

  const deletePublication = async (id: number) => {
    const { error } = await supabase.from("publications").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete publication: " + error.message);
    } else {
      toast.success("Publication deleted successfully");
      fetchData();
    }
  };

  return (
    <DataContext.Provider value={{
      news, partners: [], hallOfFame, publications, isLoading,
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

