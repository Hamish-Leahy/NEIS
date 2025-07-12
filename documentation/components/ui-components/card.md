# Card Component

## 🎯 Overview

The Card component is a versatile container that provides a consistent way to group related content and actions. It's built on Radix UI primitives and supports various layouts and styling options.

## 📋 Props

### CardProps Interface
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
```

### CardHeaderProps Interface
```typescript
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
```

### CardTitleProps Interface
```typescript
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}
```

### CardDescriptionProps Interface
```typescript
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}
```

### CardContentProps Interface
```typescript
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
```

### CardFooterProps Interface
```typescript
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
```

## 🎨 Variants

### Default Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <p>Card footer content</p>
  </CardFooter>
</Card>
```

### Interactive Card
```tsx
<Card className="hover:shadow-lg transition-shadow cursor-pointer">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see shadow effect</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has hover effects</p>
  </CardContent>
</Card>
```

### Card with Actions
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card with Actions</CardTitle>
    <CardDescription>Card with action buttons</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with actions below</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

## 🔧 Usage Examples

### Basic Card
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BasicCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>This is a basic card example</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  )
}
```

### Card with Image
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function CardWithImage() {
  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src="/placeholder.jpg"
          alt="Card image"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>Card featuring an image</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content below the image</p>
      </CardContent>
    </Card>
  )
}
```

### Card Grid
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CardGrid() {
  const cards = [
    { title: "Card 1", description: "First card", content: "Content 1" },
    { title: "Card 2", description: "Second card", content: "Content 2" },
    { title: "Card 3", description: "Third card", content: "Content 3" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Interactive Card with State
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function InteractiveCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="transition-all duration-200">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click to expand content</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the visible content.</p>
        {isExpanded && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p>This is the expanded content that appears when you click the button.</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with Badge
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CardWithBadge() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Card with Badge</CardTitle>
          <Badge variant="secondary">New</Badge>
        </div>
        <CardDescription>Card featuring a status badge</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with a badge in the header</p>
      </CardContent>
    </Card>
  )
}
```

## ♿ Accessibility Features

### Semantic Structure
- **Proper heading hierarchy**: CardTitle uses appropriate heading level
- **Landmark roles**: Card provides semantic grouping
- **Focus management**: Proper focus order within card

### Screen Reader Support
- **Descriptive content**: CardDescription provides context
- **State announcements**: Interactive states announced
- **Navigation**: Logical tab order within card

### Keyboard Navigation
```tsx
// Focusable card example
<Card tabIndex={0} onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    // Handle card activation
  }
}}>
  <CardHeader>
    <CardTitle>Focusable Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Press Enter or Space to activate</p>
  </CardContent>
</Card>
```

## 🎨 Styling

### Base Styles
```css
.card {
  @apply rounded-lg border bg-card text-card-foreground shadow-sm;
}

.card-header {
  @apply flex flex-col space-y-1.5 p-6;
}

.card-title {
  @apply text-2xl font-semibold leading-none tracking-tight;
}

.card-description {
  @apply text-sm text-muted-foreground;
}

.card-content {
  @apply p-6 pt-0;
}

.card-footer {
  @apply flex items-center p-6 pt-0;
}
```

### Custom Styling
```tsx
// Custom card styling
<Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
  <CardHeader>
    <CardTitle className="text-white">Gradient Card</CardTitle>
    <CardDescription className="text-blue-100">Custom styled card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content with custom background</p>
  </CardContent>
</Card>
```

### Responsive Design
```tsx
// Responsive card layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <Card className="h-full">
    <CardHeader>
      <CardTitle>Responsive Card</CardTitle>
    </CardHeader>
    <CardContent>
      <p>This card adapts to different screen sizes</p>
    </CardContent>
  </Card>
</div>
```

## 🔄 State Management

### Interactive States
- **Default**: Normal appearance
- **Hover**: Subtle shadow or color change
- **Focus**: Visible focus indicator
- **Active**: Pressed state
- **Disabled**: Reduced opacity and no interactions

### Loading State
```tsx
<Card>
  <CardHeader>
    <CardTitle>Loading Card</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="h-4 bg-muted animate-pulse rounded" />
      <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
      <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
    </div>
  </CardContent>
</Card>
```

## 🧪 Testing

### Unit Tests
```tsx
import { render, screen } from '@testing-library/react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

test('renders card with title and content', () => {
  render(
    <Card>
      <CardHeader>
        <CardTitle>Test Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Test content</p>
      </CardContent>
    </Card>
  )
  
  expect(screen.getByText('Test Card')).toBeInTheDocument()
  expect(screen.getByText('Test content')).toBeInTheDocument()
})
```

### Accessibility Tests
```tsx
test('card has proper semantic structure', () => {
  render(
    <Card>
      <CardHeader>
        <CardTitle>Test Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content</p>
      </CardContent>
    </Card>
  )
  
  const card = screen.getByRole('article')
  expect(card).toBeInTheDocument()
})
```

## 📱 Responsive Behavior

### Mobile Considerations
- **Touch targets**: Adequate spacing for touch interactions
- **Readable text**: Appropriate font sizes for mobile
- **Stacked layout**: Content stacks vertically on small screens

### Tablet/Desktop
- **Grid layouts**: Multi-column layouts on larger screens
- **Hover effects**: Mouse hover interactions
- **Complex layouts**: Side-by-side content arrangements

## 🔧 Advanced Usage

### Card with Form
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardWithForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>Enter your contact information</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  )
}
```

### Card with Tabs
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CardWithTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Tabs</CardTitle>
        <CardDescription>Organized content with tabs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p>Overview content goes here</p>
          </TabsContent>
          <TabsContent value="details">
            <p>Detailed information goes here</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
```

### Card with Progress
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CardWithProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Card</CardTitle>
        <CardDescription>Track your progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Task Completion</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

## 🚀 Performance Considerations

### Bundle Size
- **Minimal dependencies**: Only uses Radix UI primitives
- **Tree shaking**: Unused variants removed
- **CSS optimization**: Efficient styles

### Rendering Performance
- **Memoization**: Consider React.memo for complex cards
- **Lazy loading**: Load card content on demand
- **Virtual scrolling**: For large card lists

## 🔄 Migration Guide

### From Bootstrap Cards
```tsx
// Before: Bootstrap
<div className="card">
  <div className="card-header">
    <h5 className="card-title">Title</h5>
  </div>
  <div className="card-body">
    <p className="card-text">Content</p>
  </div>
</div>

// After: NEIS Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

### From Material-UI Cards
```tsx
// Before: Material-UI
<Card>
  <CardHeader title="Title" subheader="Subtitle" />
  <CardContent>
    <Typography>Content</Typography>
  </CardContent>
</Card>

// After: NEIS Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

---

*The Card component provides a flexible and accessible way to present grouped content with consistent styling and behavior across the NEIS application.* 