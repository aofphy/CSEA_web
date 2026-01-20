import { useState } from "react";
import { useData, PublicationItem } from "@/context/DataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash2, Edit, Plus } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from '@/components/admin/SortableItem';

export default function PublicationsManager() {
  const { publications, addPublication, updatePublication, deletePublication, reorderItems } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PublicationItem | null>(null);
  const [tagsInput, setTagsInput] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = publications.findIndex((item) => item.id === active.id);
      const newIndex = publications.findIndex((item) => item.id === over.id);
      
      const newItems = arrayMove(publications, oldIndex, newIndex);
      reorderItems('publications', newItems);
    }
  };

  const [formData, setFormData] = useState<Partial<PublicationItem>>({
    title: "",
    description: "",
    url: "#",
    tags: [],
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    
    if (editingItem) {
      updatePublication({ ...editingItem, ...formData, tags } as PublicationItem);
    } else {
      addPublication({ ...formData, tags } as any);
    }
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({
        title: "",
        description: "",
        url: "#",
        tags: [],
        image: "",
    });
    setTagsInput("");
  };

  const handleEdit = (item: PublicationItem) => {
    setEditingItem(item);
    setFormData(item);
    setTagsInput(item.tags.join(", "));
    setIsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Publications & Journals Manager</h1>
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="gap-2"><Plus className="w-4 h-4"/> Add Publication</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Publication" : "Add Publication"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Journal/Publication Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">Link URL</Label>
                <Input
                  id="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL (Optional)</Label>
                <Input
                  id="image"
                  value={formData.image || ""}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Engineering, Science, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {editingItem ? "Update" : "Create"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={publications.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid gap-4">
            {publications.map((item) => (
              <SortableItem key={item.id} id={item.id} className="bg-card rounded-lg border p-2">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="flex flex-wrap gap-2 my-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => deletePublication(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
               </div>
              </SortableItem> 
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
