import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const { news, isLoading } = useData();

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  const newsItem = news.find((n) => n.id === Number(id));

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link to="/news">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
        </Button>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {newsItem.image && (
             <img src={newsItem.image} alt={newsItem.title} className="w-full max-h-[500px] object-cover rounded-xl mb-8" />
          )}
          
          <div className="flex items-center gap-4 mb-4 not-prose">
             <Badge variant={newsItem.category === "Conference" ? "default" : "secondary"}>
                {newsItem.category}
             </Badge>
             <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CalendarDays className="h-4 w-4" />
                <span>{newsItem.date}</span>
             </div>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold sm:text-5xl">{newsItem.title}</h1>
          
          <div className="mt-8">
            <Markdown remarkPlugins={[remarkGfm]}>{newsItem.description}</Markdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
