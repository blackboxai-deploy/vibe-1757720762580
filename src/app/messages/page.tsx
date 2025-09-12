"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null)
  
  const conversations = [
    {
      id: 1,
      name: "Operation Alpha",
      type: "group",
      participants: 12,
      lastMessage: "Document verification complete. Proceeding to phase 2.",
      timestamp: "2m ago",
      unread: 3,
      encryption: "E2E",
      status: "active"
    },
    {
      id: 2,
      name: "Whistleblower Contact",
      type: "direct",
      participants: 2,
      lastMessage: "I have additional evidence that needs secure transfer.",
      timestamp: "15m ago",
      unread: 1,
      encryption: "E2E",
      status: "secure"
    },
    {
      id: 3,
      name: "Emergency Response Team",
      type: "group",
      participants: 8,
      lastMessage: "Disinformation campaign detected. All hands on deck.",
      timestamp: "1h ago",
      unread: 0,
      encryption: "E2E",
      status: "urgent"
    },
    {
      id: 4,
      name: "Regional Coordinators",
      type: "group",
      participants: 24,
      lastMessage: "Planning coordination meeting for next week.",
      timestamp: "3h ago",
      unread: 0,
      encryption: "E2E",
      status: "active"
    }
  ]

  const messages = selectedChat ? [
    {
      id: 1,
      sender: "Phoenix_42",
      content: "Latest intelligence package has been verified and uploaded to the secure vault.",
      timestamp: "2m ago",
      type: "message",
      encrypted: true
    },
    {
      id: 2,
      sender: "Guardian_7",
      content: "Excellent work. The network connections are becoming clearer.",
      timestamp: "1m ago",
      type: "message",
      encrypted: true
    },
    {
      id: 3,
      sender: "You",
      content: "Should we proceed with the public release strategy?",
      timestamp: "30s ago",
      type: "message",
      encrypted: true
    }
  ] : []

  return (
    <div className="flex h-full">
      {/* Conversations List */}
      <div className="w-96 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Secure Messages</h2>
            <Badge variant="outline" className="text-green-400 border-green-400">
              E2E
            </Badge>
          </div>
          
          <div className="space-y-2">
            <Input placeholder="Search conversations..." className="h-8" />
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="flex-1">
                🔒 New Group
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                📤 Invite
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors mb-2 ${
                  selectedChat?.id === conv.id 
                    ? 'bg-secondary' 
                    : 'hover:bg-secondary/50'
                }`}
                onClick={() => setSelectedChat(conv)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      conv.status === 'urgent' ? 'bg-red-500 animate-pulse' :
                      conv.status === 'secure' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <span className="font-medium text-sm">{conv.name}</span>
                    {conv.type === 'group' && (
                      <span className="text-xs text-muted-foreground">({conv.participants})</span>
                    )}
                  </div>
                  {conv.unread > 0 && (
                    <Badge variant="destructive" className="text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground truncate mb-1">
                  {conv.lastMessage}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                  <div className="flex items-center space-x-1">
                    <Badge variant="outline" className="text-xs">
                      {conv.encryption}
                    </Badge>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{selectedChat.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedChat.type === 'group' 
                      ? `${selectedChat.participants} members • End-to-end encrypted`
                      : 'Direct message • End-to-end encrypted'
                    }
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    SECURE
                  </Badge>
                  <Button size="sm" variant="outline">
                    📁 Files
                  </Button>
                  <Button size="sm" variant="outline">
                    ⚙️ Settings
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'You' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      {message.sender !== 'You' && (
                        <p className="text-xs font-medium mb-1">{message.sender}</p>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                        {message.encrypted && (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs opacity-70">E2E</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  📎
                </Button>
                <div className="flex-1 flex space-x-2">
                  <Textarea 
                    placeholder="Type a secure message..." 
                    className="resize-none"
                    rows={1}
                  />
                  <Button size="sm">
                    Send 🔒
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>🔒 End-to-end encrypted • 🛡️ Anonymous routing</span>
                <span>✓ Tor network active</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Communications Center</h3>
                <p className="text-muted-foreground mb-4">
                  Select a conversation to start secure messaging
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Military-grade encryption active</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Anonymous identity protection enabled</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Tor network routing active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}