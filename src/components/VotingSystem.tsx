"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VotingSystemProps {
  alertId: number;
  currentVotes: number;
}

export function VotingSystem({ alertId, currentVotes }: VotingSystemProps) {
  const handleVote = () => {
    // Mock vote
    alert(`Voted on alert ${alertId}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" onClick={handleVote}>Flag Suspicious</Button>
      <Badge>{currentVotes} Votes</Badge>
    </div>
  );
}