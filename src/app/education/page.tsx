"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Educational Resources & Training</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>OpSec Tutorials</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Digital Security Basics</AccordionTrigger>
              <AccordionContent>Use strong passwords and VPNs for protection.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Identifying Disinformation</AccordionTrigger>
              <AccordionContent>Check sources and fact-check claims.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Webinars & Q&A</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Upcoming: ethical whistleblowing - RSVP now.</p>
          <Button>Schedule Session</Button>
        </CardContent>
      </Card>
    </div>
  );
}