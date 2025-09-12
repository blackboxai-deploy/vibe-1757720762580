"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { VotingSystem } from "@/components/VotingSystem"; // We'll create in Phase 3

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, title: "Disinformation Campaign on Topic A", level: "High", status: "Active", votes: 15 },
    { id: 2, title: "Fake News Spread in Region B", level: "Medium", status: "Monitoring", votes: 8 },
  ]);
  const [newResponse, setNewResponse] = useState("");

  useEffect(() => {
    // Mock new alerts
    const interval = setInterval(() => {
      setAlerts((prev) => [
        ...prev,
        { id: prev.length + 1, title: "New Threat Detected", level: "Low", status: "New", votes: 0 },
      ]);
    }, 45000); // Every 45 seconds
    return () => clearInterval(interval);
  }, []);

  const craftResponse = () => {
    if (newResponse.trim()) {
      // Mock response creation
      alert("Counter-narrative created and distributed.");
      setNewResponse("");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Disinformation Alerts & Response</h1>
      
      <Alert variant="destructive">
        <AlertTitle>Active High-Threat Alert</AlertTitle>
        <AlertDescription>Monitor and respond immediately to protect the movement.</AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Craft Rapid Response</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value={newResponse} onChange={(e) => setNewResponse(e.target.value)} placeholder="Enter counter-narrative..." />
            <Button onClick={craftResponse}>Distribute</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          {alerts.map((alert) => (
            <div key={alert.id} className="border-b py-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{alert.title}</p>
                  <Badge variant={alert.level === "High" ? "destructive" : "secondary"}>{alert.level} Level - {alert.status}</Badge>
                </div>
                <VotingSystem alertId={alert.id} currentVotes={alert.votes} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}