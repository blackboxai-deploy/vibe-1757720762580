"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Community & Support</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Peer Forums</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Post in forum (encrypted)..." />
          <Button className="mt-2">Post Anonymously</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mental Health Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access support for burnout and intimidation.</p>
          <Button variant="link">View Resources</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contributor Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Top contributors: Anonymous Hero (50 points).</p>
        </CardContent>
      </Card>
    </div>
  );
}