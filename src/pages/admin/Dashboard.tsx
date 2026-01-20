import { useData } from "@/context/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Trophy, BookOpen } from "lucide-react";

export default function AdminDashboard() {
  const { news, hallOfFame, publications } = useData();

  const stats = [
    { label: "News & Events", value: news.length, icon: Newspaper },
    { label: "Hall of Fame", value: hallOfFame.length, icon: Trophy },
    { label: "Publications & Journals", value: publications.length, icon: BookOpen },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Content Management System</h2>
        <p className="text-muted-foreground">
            Select a section from the sidebar to manage content. 
            All changes are saved locally to your browser for this session. 
            In a production environment, this would connect to a database.
        </p>
      </div>
    </div>
  );
}
