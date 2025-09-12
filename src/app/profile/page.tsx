"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ProfileManager } from "@/components/ProfileManager";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Profile Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Anonymous Identity</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileManager />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="mfa" />
            <Label htmlFor="mfa">Enable MFA</Label>
          </div>
          <div>
            <Label>Update Pseudonym</Label>
            <Input placeholder="New pseudonym" />
            <Button className="mt-2">Update</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}