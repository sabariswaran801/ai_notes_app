"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NoteCardProps {
  title: string;
  content: string;
  tags?: string[];
  onEdit: () => void;
  onDelete: () => void;
}

export default function NoteCard({
  title,
  content,
  tags,
  onEdit,
  onDelete,
}: NoteCardProps) {
  return (
    <Card className="shadow-md border rounded-2xl hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle className="font-bold text-lg line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 whitespace-pre-wrap line-clamp-5">
          {content}
        </p>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-sm px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <Button size="sm" onClick={onEdit}>
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
