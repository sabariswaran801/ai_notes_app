"use client";

import { Button } from "@/components/ui/button";

interface AIButtonProps {
  label: string;
  onClick: () => void;
}

export default function AIButton({ label, onClick }: AIButtonProps) {
  return (
    <Button size="sm" variant="secondary" onClick={onClick}>
      {label}
    </Button>
  );
}
