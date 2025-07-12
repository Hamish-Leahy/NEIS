# Tailwind CSS Configuration

## 🎯 Overview

The NEIS application uses Tailwind CSS 3.4.17 as the primary styling framework. The configuration is customized with NEIS brand colors, design tokens, and accessibility-focused utilities.

## 📁 Configuration File

**File**: `tailwind.config.ts`
**Type**: TypeScript configuration
**Framework**: Tailwind CSS 3.4.17

## ⚙️ Current Configuration

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... additional color tokens
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

## 🎨 Color System

### Base Colors
```typescript
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))'
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
}
```

### Chart Colors
```typescript
chart: {
  '1': 'hsl(var(--chart-1))',
  '2': 'hsl(var(--chart-2))',
  '3': 'hsl(var(--chart-3))',
  '4': 'hsl(var(--chart-4))',
  '5': 'hsl(var(--chart-5))'
}
```

### Sidebar Colors
```typescript
sidebar: {
  DEFAULT: 'hsl(var(--sidebar-background))',
  foreground: 'hsl(var(--sidebar-foreground))',
  primary: 'hsl(var(--sidebar-primary))',
  'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  accent: 'hsl(var(--sidebar-accent))',
  'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  border: 'hsl(var(--sidebar-border))',
  ring: 'hsl(var(--sidebar-ring))'
}
```

## 🌙 Dark Mode

### Configuration
```typescript
darkMode: ["class"]
```

**Purpose**: Enable class-based dark mode
**Usage**: Toggle dark mode by adding/removing `dark` class on HTML element

### Implementation
```typescript
// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## 📱 Content Configuration

### File Patterns
```typescript
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "*.{js,ts,jsx,tsx,mdx}"
]
```

**Purpose**: Define which files Tailwind should scan for classes
**Coverage**: All React components and pages
**Performance**: Only includes used classes in final CSS

## 🎨 Design Tokens

### Border Radius
```typescript
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)'
}
```

**Usage**:
- `rounded-lg`: Large border radius
- `rounded-md`: Medium border radius
- `rounded-sm`: Small border radius

### Custom Spacing
```typescript
spacing: {
  '18': '4.5rem',
  '88': '22rem',
  '128': '32rem',
}
```

### Typography Scale
```typescript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
}
```

## 🎬 Animations

### Keyframes
```typescript
keyframes: {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' }
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' }
  },
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' }
  },
  'slide-in-from-top': {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' }
  },
  'slide-in-from-bottom': {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' }
  },
  'slide-in-from-left': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' }
  },
  'slide-in-from-right': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' }
  }
}
```

### Animation Classes
```typescript
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.2s ease-out',
  'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
  'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
  'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
  'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
  'spin-slow': 'spin 3s linear infinite',
  'bounce-slow': 'bounce 2s infinite',
}
```

## 🔌 Plugins

### Tailwind CSS Animate
```typescript
plugins: [require("tailwindcss-animate")]
```

**Features**:
- Smooth animations for UI components
- Radix UI integration
- Performance optimized
- Reduced motion support

### Custom Plugins
```typescript
// Custom plugin for NEIS-specific utilities
function neisPlugin({ addUtilities, theme }) {
  const newUtilities = {
    '.text-balance': {
      textWrap: 'balance',
    },
    '.text-pretty': {
      textWrap: 'pretty',
    },
    '.scrollbar-hide': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  }
  addUtilities(newUtilities)
}

plugins: [require("tailwindcss-animate"), neisPlugin]
```

## ♿ Accessibility Utilities

### Focus Styles
```css
/* Custom focus ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background;
}

/* High contrast focus */
.focus-ring-high-contrast {
  @apply focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2;
}
```

### Reduced Motion
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Only
```css
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
}
```

## 📱 Responsive Design

### Breakpoint System
```typescript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Container Queries
```typescript
// Future: Container query support
containers: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

## 🎨 Component Variants

### Button Variants
```typescript
// Using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🚀 Performance Optimizations

### Purge CSS
```typescript
// Automatic purging of unused styles
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
]
```

### JIT Mode
```typescript
// Just-In-Time compilation (enabled by default in Tailwind CSS 3.0+)
// Generates styles on-demand for better performance
```

### CSS Optimization
```typescript
// PostCSS configuration for optimization
module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false,
  },
}
```

## 🔧 Development Tools

### IntelliSense
```json
// VS Code settings.json
{
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Debug Mode
```bash
# Enable debug mode for development
TAILWIND_DEBUG=true npm run dev
```

## 📊 CSS Variables

### Light Theme
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
}
```

### Dark Theme
```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 94.1%;
}
```

## 🧪 Testing

### Visual Regression Testing
```typescript
// Component testing with Tailwind classes
test('button renders with correct classes', () => {
  render(<Button variant="primary" size="lg">Click me</Button>)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('bg-primary', 'text-primary-foreground', 'h-11')
})
```

### Accessibility Testing
```typescript
// Test focus styles
test('button has proper focus styles', () => {
  render(<Button>Click me</Button>)
  const button = screen.getByRole('button')
  button.focus()
  expect(button).toHaveClass('focus:ring-2', 'focus:ring-ring')
})
```

## 🔄 Migration Guide

### From CSS Modules
```css
/* Before: CSS Modules */
.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

/* After: Tailwind Classes */
<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
  Click me
</button>
```

### From Styled Components
```typescript
// Before: Styled Components
const StyledButton = styled.button`
  background-color: ${props => props.variant === 'primary' ? '#3b82f6' : '#6b7280'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
`;

// After: Tailwind with cva
const buttonVariants = cva(
  "px-4 py-2 rounded-md text-white",
  {
    variants: {
      variant: {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
      },
    },
  }
);
```

---

*This Tailwind CSS configuration provides a comprehensive design system that is accessible, performant, and maintainable for the NEIS application.* 