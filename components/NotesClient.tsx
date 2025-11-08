"use client";

import { useState, useEffect } from "react";
import NoteCard from "@/components/NoteCard";
import NoteEditor from "@/components/NoteEditor";
import SearchBar from "@/components/SearchBar";
import { toast } from "sonner";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export default function NotesClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    setLoading(true);
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching notes");
    } finally {
      setLoading(false);
    }
  }

  async function saveNote(note: {
    id?: string;
    title: string;
    content: string;
    tags?: string | string[];
  }) {
    try {
      const method = note.id ? "PATCH" : "POST";
      const url = note.id ? `/api/notes/${note.id}` : "/api/notes";

      const body = {
        ...note,
        tags: Array.isArray(note.tags)
          ? note.tags
          : note.tags
          ? note.tags.split(",").map((t) => t.trim())
          : [],
      };

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setEditingNote(null);
      fetchNotes();
      toast.success(note.id ? "Note updated!" : "Note created!");
    } catch (err) {
      console.error(err);
      toast.error("Error saving note");
    }
  }

  async function deleteNote(id: string) {
    if (!confirm("Are you sure you want to delete this note?")) return;
    try {
      await fetch(`/api/notes/${id}`, { method: "DELETE" });
      setNotes(notes.filter((n) => n.id !== id));
      toast.success("Note deleted");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting note");
    }
  }

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <SearchBar query={search} onChange={setSearch} />

      <NoteEditor
        defaultValues={
          editingNote
            ? {
                title: editingNote.title,
                content: editingNote.content,
                tags: editingNote.tags?.join(", "),
              }
            : { title: "", content: "", tags: "" }
        }
        onSubmit={(note) =>
          saveNote({
            id: editingNote?.id,
            title: note.title,
            content: note.content,
            tags: note.tags,
          })
        }
      />

      {editingNote && (
        <div className="flex justify-center mt-2">
          <button
            className="text-sm text-gray-600 underline"
            onClick={() => setEditingNote(null)}
          >
            Cancel Editing
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-center mt-4">Loading notes...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              content={note.content}
              tags={note.tags}
              onEdit={() => setEditingNote(note)}
              onDelete={() => deleteNote(note.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
