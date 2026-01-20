import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

export function SortableItem({ id, children, className }: { id: string | number, children: React.ReactNode, className?: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={`flex items-center gap-2 ${className}`}>
      <div {...attributes} {...listeners} className="cursor-grab touch-none px-2 py-4 text-muted-foreground hover:text-foreground">
        <GripVertical className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
