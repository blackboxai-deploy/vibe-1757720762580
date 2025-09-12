"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "Protest Against Corruption", date: "2023-11-15", rsvp: 45, impact: "High" },
    { id: 2, title: "Petition for Transparency", date: "2023-12-01", rsvp: 120, impact: "Medium" },
  ]);
  const [newCampaign, setNewCampaign] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const addCampaign = () => {
    if (newCampaign.trim() && selectedDate) {
      setCampaigns([...campaigns, { id: campaigns.length + 1, title: newCampaign, date: selectedDate.toISOString().split('T')[0], rsvp: 0, impact: "Pending" }]);
      setNewCampaign("");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Campaign & Action Center</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Schedule New Event</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Event Title</Label>
            <Input value={newCampaign} onChange={(e) => setNewCampaign(e.target.value)} placeholder="Enter campaign name..." />
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
          <Button onClick={addCampaign}>Add Campaign</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>RSVP</TableHead>
                <TableHead>Impact Metrics</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((camp) => (
                <TableRow key={camp.id}>
                  <TableCell>{camp.title}</TableCell>
                  <TableCell>{camp.date}</TableCell>
                  <TableCell>{camp.rsvp}</TableCell>
                  <TableCell>{camp.impact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Viral Content Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Share templates for coordinated messaging (mock library).</p>
          <Button variant="outline">Download Graphics</Button>
        </CardContent>
      </Card>
    </div>
  );
}