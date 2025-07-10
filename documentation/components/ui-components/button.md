# Button Component

## 🎯 Overview

The Button component is a fundamental interactive element that provides various styles and sizes for user interactions. Built on Radix UI's Slot primitive, it supports polymorphic rendering and comprehensive accessibility features.

## 📋 Props

### ButtonProps Interface
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

### Core Props
- **`asChild`** (boolean): Renders as a different element using Radix UI Slot
- **`variant`** (string): Visual style variant
- **`size`** (string): Size variant
- **`className`** (string): Additional CSS classes
- **`disabled`** (boolean): Disabled state
- **`children`** (ReactNode): Button content

### HTML Button Props
All standard HTML button attributes are supported:
- `onClick`, `onFocus`, `onBlur`
- `type`, `name`, `value`
- `aria-*` attributes
- `data-*` attributes

## 🎨 Variants

### Visual Variants

#### Default
```tsx
<Button>Default Button</Button>
```
- Primary brand color
- Solid background
- Hover effect with opacity

#### Secondary
```tsx
<Button variant="secondary">Secondary Button</Button>
```
- Secondary brand color
- Solid background
- Subtle hover effect

#### Outline
```tsx
<Button variant="outline">Outline Button</Button>
```
- Transparent background
- Border styling
- Hover fills background

#### Ghost
```tsx
<Button variant="ghost">Ghost Button</Button>
```
- No background or border
- Hover shows subtle background
- Minimal visual impact

#### Link
```tsx
<Button variant="link">Link Button</Button>
```
- Text-only appearance
- Underline on hover
- Link-like behavior

#### Destructive
```tsx
<Button variant="destructive">Delete</Button>
```
- Error/danger styling
- Red color scheme
- For destructive actions

### Size Variants

#### Default
```tsx
<Button size="default">Default Size</Button>
```
- Height: 40px (h-10)
- Padding: 16px horizontal, 8px vertical
- Standard button size

#### Small
```tsx
<Button size="sm">Small Button</Button>
```
- Height: 36px (h-9)
- Padding: 12px horizontal
- Compact size for tight spaces

#### Large
```tsx
<Button size="lg">Large Button</Button>
```
- Height: 44px (h-11)
- Padding: 32px horizontal
- Prominent size for primary actions

#### Icon
```tsx
<Button size="icon">
  <Icon />
</Button>
```
- Square dimensions: 40px × 40px
- Centered content
- For icon-only buttons

## 🔧 Usage Examples

### Basic Usage
```tsx
import { Button } from "@/components/ui/button"

export function BasicButton() {
  return (
    <Button onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}
```

### With Icons
```tsx
import { Button } from "@/components/ui/button"
import { Plus, Download } from "lucide-react"

export function ButtonWithIcons() {
  return (
    <div className="space-x-2">
      <Button>
        <Plus className="mr-2" />
        Add Item
      </Button>
      
      <Button variant="outline">
        <Download className="mr-2" />
        Download
      </Button>
    </div>
  )
}
```

### Loading State
```tsx
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? "Loading..." : "Submit"}
    </Button>
  )
}
```

### As Child (Polymorphic)
```tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LinkButton() {
  return (
    <Button asChild>
      <Link href="/dashboard">
        Go to Dashboard
      </Link>
    </Button>
  )
}
```

### Form Submission
```tsx
import { Button } from "@/components/ui/button"

export function SubmitButton() {
  return (
    <form>
      <Button type="submit">
        Submit Form
      </Button>
    </form>
  )
}
```

### Disabled State
```tsx
import { Button } from "@/components/ui/button"

export function DisabledButton() {
  return (
    <Button disabled>
      Disabled Button
    </Button>
  )
}
```

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab Focus**: Button is focusable with keyboard
- **Enter/Space**: Activates button when focused
- **Focus Ring**: Visible focus indicator

### Screen Reader Support
- **Role**: Implicit button role
- **Label**: Text content serves as accessible name
- **State**: Disabled state announced to screen readers

### ARIA Attributes
```tsx
// Custom aria-label
<Button aria-label="Close dialog">
  <X />
</Button>

// Expanded state
<Button aria-expanded={isOpen}>
  Toggle Menu
</Button>

// Pressed state
<Button aria-pressed={isPressed}>
  Toggle
</Button>
```

## 🎨 Styling

### Base Styles
```css
.inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
```

### Icon Styling
```css
[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
```

### Custom Styling
```tsx
// Using className
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Styled
</Button>

// Using CSS modules
<Button className={styles.customButton}>
  Custom Button
</Button>
```

## 🔄 State Management

### Interactive States
- **Default**: Normal appearance
- **Hover**: Background color change
- **Focus**: Ring indicator
- **Active**: Pressed state
- **Disabled**: Reduced opacity, no interactions

### State Transitions
```css
transition-colors
```
- Smooth color transitions
- 150ms duration
- Ease-in-out timing

## 🧪 Testing

### Unit Tests
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
})

test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### Accessibility Tests
```tsx
test('is keyboard accessible', () => {
  render(<Button>Click me</Button>)
  const button = screen.getByRole('button')
  button.focus()
  expect(button).toHaveFocus()
})
```

## 📱 Responsive Behavior

### Mobile Considerations
- **Touch Targets**: Minimum 44px height
- **Spacing**: Adequate padding for touch
- **Visual Feedback**: Clear pressed states

### Tablet/Desktop
- **Hover States**: Mouse hover effects
- **Focus Management**: Keyboard navigation
- **Performance**: Smooth animations

## 🔧 Advanced Usage

### Button Groups
```tsx
import { Button } from "@/components/ui/button"

export function ButtonGroup() {
  return (
    <div className="flex space-x-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  )
}
```

### Conditional Rendering
```tsx
import { Button } from "@/components/ui/button"

export function ConditionalButton({ isAdmin, onAction }) {
  return (
    <Button 
      variant={isAdmin ? "destructive" : "secondary"}
      onClick={onAction}
    >
      {isAdmin ? "Delete" : "Archive"}
    </Button>
  )
}
```

### With Form Validation
```tsx
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export function FormButton() {
  const { formState: { isValid, isSubmitting } } = useForm()

  return (
    <Button 
      type="submit" 
      disabled={!isValid || isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  )
}
```

## 🚀 Performance Considerations

### Bundle Size
- **Tree Shaking**: Only imports used variants
- **No Dependencies**: Self-contained component
- **Minimal Bundle Impact**: ~2KB gzipped

### Rendering Performance
- **Memoization**: Consider React.memo for complex buttons
- **Event Handling**: Debounce rapid clicks if needed
- **State Updates**: Optimize re-renders

## 🔄 Migration Guide

### From HTML Button
```tsx
// Before
<button className="btn btn-primary">Click me</button>

// After
<Button variant="default">Click me</Button>
```

### From Other UI Libraries
```tsx
// Material-UI
<Button variant="contained" color="primary">Click me</Button>

// NEIS Button
<Button variant="default">Click me</Button>
```

---

*The Button component is designed to be flexible, accessible, and performant. It follows established design patterns and provides a consistent user experience across the application.* 