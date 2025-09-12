"use client";

import { Badge } from "@/components/ui/badge";

export function SecurityIndicator() {
  return (
    <Badge variant="secondary" className="mb-4">
      Security Status: Secure (Mock Encryption Active)
    </Badge>
  );
}