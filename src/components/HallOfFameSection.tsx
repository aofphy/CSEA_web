import { Trophy, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useData } from "@/context/DataContext";
import Markdown from "react-markdown";

export function HallOfFameSection() {
  const { hallOfFame } = useData();

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-yellow-100 rounded-full dark:bg-yellow-900/20">
                    <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                </div>
            </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Hall of Fame
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honoring the pioneers and distinguished researchers who have made significant contributions to the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {hallOfFame.map((person) => (
            <Card key={person.id} className="text-center hover:shadow-lg transition-all duration-300 border-none bg-background/80 backdrop-blur">
              <CardHeader className="flex flex-col items-center pb-2">
                <Avatar className="w-24 h-24 mb-4 border-4 border-yellow-100 dark:border-yellow-900/30">
                  <AvatarImage src={person.image} className="object-cover" />
                  <AvatarFallback className="text-xl bg-primary/10 text-primary">
                      {person.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{person.name}</CardTitle>
                <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500 font-medium text-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {person.role}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground prose prose-sm dark:prose-invert">
                   <Markdown>{person.description}</Markdown>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

