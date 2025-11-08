"use client";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto mb-4">
      <Input
        placeholder="Search notes..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
