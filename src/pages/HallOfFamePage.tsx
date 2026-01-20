import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function HallOfFamePage() {
  const { hallOfFame } = useData();

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="mb-4 text-4xl font-bold text-center">Hall of Fame</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Honoring the pioneers and distinguished researchers who have made significant contributions.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hallOfFame.map((person) => (
            <Card key={person.id} className="text-center hover:shadow-lg transition-all duration-300 border bg-background">
              <CardHeader className="flex flex-col items-center pb-2">
                <Avatar className="w-32 h-32 mb-4 border-4 border-yellow-100 dark:border-yellow-900/30">
                  <AvatarImage src={person.image} className="object-cover" />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {person.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{person.name}</CardTitle>
                <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500 font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    {person.role}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground prose prose-sm dark:prose-invert">
                   <Markdown remarkPlugins={[remarkGfm]}>{person.description}</Markdown>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
