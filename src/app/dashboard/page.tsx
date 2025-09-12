"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DashboardPage() {
  const recentAlerts = [
    {
      id: 1,
      title: "Disinformation Campaign Detected",
      description: "Coordinated false narratives targeting climate activists",
      severity: "high",
      time: "2 minutes ago"
    },
    {
      id: 2,
      title: "New Document Verified",
      description: "Corporate-government correspondence leaked and authenticated",
      severity: "medium",
      time: "15 minutes ago"
    },
    {
      id: 3,
      title: "Campaign Milestone Reached",
      description: "Transparency petition reached 50,000 signatures",
      severity: "low",
      time: "1 hour ago"
    }
  ]

  const activeOperations = [
    {
      name: "Operation Sunlight",
      progress: 78,
      participants: 142,
      status: "active"
    },
    {
      name: "Corporate Accountability Drive",
      progress: 45,
      participants: 89,
      status: "planning"
    },
    {
      name: "Whistleblower Protection Act",
      progress: 92,
      participants: 234,
      status: "critical"
    }
  ]

  return (
    <div className="flex-1 space-y-6 p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mission Control</h1>
          <p className="text-muted-foreground">
            Real-time resistance coordination and intelligence overview
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-400 border-green-400">
            SECURE CONNECTION
          </Badge>
          <Badge variant="outline">
            Anonymous Mode
          </Badge>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Operations</CardTitle>
            <span className="text-2xl">⚡</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +3 from last week
            </p>
            <div className="flex items-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">All systems operational</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Members</CardTitle>
            <span className="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,432</div>
            <p className="text-xs text-muted-foreground">
              +234 new this month
            </p>
            <div className="flex items-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-400">Global presence</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Verified</CardTitle>
            <span className="text-2xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +89 pending review
            </p>
            <div className="flex items-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-orange-400">High accuracy rate</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threat Level</CardTitle>
            <span className="text-2xl">🚨</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">ELEVATED</div>
            <p className="text-xs text-muted-foreground">
              Disinformation campaigns active
            </p>
            <div className="flex items-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-orange-400">Monitoring closely</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Intelligence Alerts</CardTitle>
            <CardDescription>
              Real-time updates on critical developments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/40">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      alert.severity === 'high' ? 'bg-red-500' :
                      alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{alert.title}</p>
                      <p className="text-xs text-muted-foreground">{alert.description}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                    <Badge 
                      variant={alert.severity === 'high' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Active Operations */}
        <Card>
          <CardHeader>
            <CardTitle>Active Operations</CardTitle>
            <CardDescription>
              Current resistance campaigns and their progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-6">
                {activeOperations.map((operation, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{operation.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {operation.participants} participants
                        </p>
                      </div>
                      <Badge 
                        variant={
                          operation.status === 'active' ? 'default' :
                          operation.status === 'critical' ? 'destructive' : 'secondary'
                        }
                        className="text-xs"
                      >
                        {operation.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{operation.progress}%</span>
                      </div>
                      <Progress value={operation.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Rapid access to critical platform functions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Secure Message</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <span className="text-2xl">📤</span>
              <span className="text-sm">Submit Intel</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <span className="text-2xl">🚨</span>
              <span className="text-sm">Report Threat</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sm">Join Campaign</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}