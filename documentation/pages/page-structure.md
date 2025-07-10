# Page Structure & Routing

## 🎯 Overview

The NEIS application uses Next.js 15 App Router for file-based routing. Each page is a React component that represents a route in the application. The structure is organized by user roles and functionality.

## 📁 Directory Structure

```
app/
├── layout.tsx              # Root layout component
├── page.tsx               # Home page (/)
├── globals.css            # Global styles
├── about/
│   └── page.tsx          # About page (/about)
├── contact/
│   └── page.tsx          # Contact page (/contact)
├── login/
│   └── page.tsx          # Login page (/login)
├── register/
│   └── page.tsx          # Registration page (/register)
├── get-started/
│   └── page.tsx          # Onboarding page (/get-started)
├── resources/
│   ├── page.tsx          # Resources page (/resources)
│   └── loading.tsx       # Loading state
├── dashboard/
│   └── page.tsx          # General dashboard (/dashboard)
├── user-dashboard/
│   └── page.tsx          # User dashboard (/user-dashboard)
├── practitioner-dashboard/
│   └── page.tsx          # Practitioner dashboard (/practitioner-dashboard)
├── supervisor-dashboard/
│   └── page.tsx          # Supervisor dashboard (/supervisor-dashboard)
├── admin-dashboard/
│   └── page.tsx          # Admin dashboard (/admin-dashboard)
└── video-session/
    └── page.tsx          # Video session page (/video-session)
```

## 🏠 Public Pages

### Home Page (`/`)
**File**: `app/page.tsx`

**Purpose**: Landing page for all users
**Features**:
- Hero section with call-to-action
- Service overview (Guided vs Self-Guided LiCBT)
- Key features and benefits
- Accessibility information
- Statistics and impact
- Crisis support banner

**Key Components**:
- Header with navigation
- Hero section with CTAs
- Service type cards
- Feature highlights
- Statistics section
- Footer

**Accessibility**:
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast ratios

### About Page (`/about`)
**File**: `app/about/page.tsx`

**Purpose**: Information about NEIS organization
**Content**:
- Mission and vision
- Team information
- Evidence-based approach
- Privacy and security
- Contact information

### Contact Page (`/contact`)
**File**: `app/contact/page.tsx`

**Purpose**: Contact information and support
**Features**:
- Contact form
- Support channels
- Crisis support information
- FAQ section

### Resources Page (`/resources`)
**File**: `app/resources/page.tsx`

**Purpose**: Educational materials and self-help resources
**Features**:
- Resource library
- Interactive modules
- Downloadable materials
- Progress tracking

## 🔐 Authentication Pages

### Login Page (`/login`)
**File**: `app/login/page.tsx`

**Purpose**: User authentication
**Features**:
- Email/password login
- Social login options
- Password recovery
- Remember me functionality
- Multi-factor authentication

**Security**:
- CSRF protection
- Rate limiting
- Secure session management
- Input validation

### Registration Page (`/register`)
**File**: `app/register/page.tsx`

**Purpose**: New user registration
**Features**:
- Multi-step registration
- Role selection
- Email verification
- Terms and conditions
- Privacy consent

### Get Started Page (`/get-started`)
**File**: `app/get-started/page.tsx`

**Purpose**: Onboarding and service selection
**Features**:
- Service type selection
- Assessment questionnaire
- Goal setting
- Appointment scheduling
- Resource recommendations

## 📊 Dashboard Pages

### General Dashboard (`/dashboard`)
**File**: `app/dashboard/page.tsx`

**Purpose**: Role-based dashboard redirect
**Logic**:
- Checks user role
- Redirects to appropriate dashboard
- Shows loading state during redirect

### User Dashboard (`/user-dashboard`)
**File**: `app/user-dashboard/page.tsx`

**Purpose**: Family/user interface
**Features**:
- Progress tracking
- Session scheduling
- Resource access
- Goal management
- Communication with practitioners

**Components**:
- Progress overview
- Upcoming sessions
- Recent activities
- Quick actions
- Notifications

### Practitioner Dashboard (`/practitioner-dashboard`)
**File**: `app/practitioner-dashboard/page.tsx`

**Purpose**: Practitioner interface
**Features**:
- Client management
- Session scheduling
- Progress documentation
- Resource library
- Communication tools

**Components**:
- Client list
- Session calendar
- Documentation tools
- Resource access
- Analytics overview

### Supervisor Dashboard (`/supervisor-dashboard`)
**File**: `app/supervisor-dashboard/page.tsx`

**Purpose**: Supervisor interface
**Features**:
- Practitioner oversight
- Quality assurance
- Report generation
- Case review
- Performance monitoring

**Components**:
- Practitioner overview
- Case management
- Quality metrics
- Report generation
- Communication tools

### Admin Dashboard (`/admin-dashboard`)
**File**: `app/admin-dashboard/page.tsx`

**Purpose**: System administration
**Features**:
- User management
- System configuration
- Analytics and reporting
- Security monitoring
- Content management

**Components**:
- User administration
- System metrics
- Configuration panel
- Security logs
- Content editor

## 🎥 Video Session Page

### Video Session (`/video-session`)
**File**: `app/video-session/page.tsx`

**Purpose**: Real-time video conferencing
**Features**:
- WebRTC video/audio
- Screen sharing
- Chat functionality
- Session recording
- Whiteboard tools

**Components**:
- Video interface
- Controls panel
- Chat sidebar
- Session timer
- Recording controls

## 🔄 Routing Logic

### Authentication Flow
```typescript
// Route protection logic
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth()
  
  if (loading) return <LoadingSpinner />
  
  if (!user) {
    redirect('/login')
  }
  
  if (requiredRole && user.role !== requiredRole) {
    redirect('/dashboard')
  }
  
  return children
}
```

### Role-Based Access
```typescript
// Role-based routing
const roleRoutes = {
  user: '/user-dashboard',
  practitioner: '/practitioner-dashboard',
  supervisor: '/supervisor-dashboard',
  admin: '/admin-dashboard'
}
```

### Dynamic Routes
```typescript
// Dynamic route patterns
/session/[id]          // Session details
/user/[id]            // User profiles
/resource/[category]   // Resource categories
```

## 📱 Responsive Design

### Mobile-First Approach
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Targets**: Minimum 44px for mobile
- **Navigation**: Collapsible mobile menu
- **Performance**: Optimized for mobile networks

### Adaptive Layouts
- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsed sidebar
- **Mobile**: Bottom navigation or hamburger menu

## ♿ Accessibility Features

### Navigation
- **Skip Links**: Jump to main content
- **Breadcrumbs**: Clear navigation path
- **Focus Management**: Logical tab order
- **ARIA Labels**: Screen reader support

### Content
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Image descriptions
- **Color Contrast**: WCAG AA compliance
- **Keyboard Navigation**: Full keyboard support

## 🚀 Performance Optimization

### Page Loading
- **Code Splitting**: Route-based splitting
- **Preloading**: Critical routes preloaded
- **Caching**: Static page caching
- **Optimization**: Image and font optimization

### Bundle Size
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Components loaded on demand
- **Compression**: Gzip/Brotli compression
- **CDN**: Global content delivery

## 🔒 Security Considerations

### Route Protection
- **Authentication**: Protected routes
- **Authorization**: Role-based access
- **CSRF Protection**: Cross-site request forgery
- **Rate Limiting**: API abuse prevention

### Data Protection
- **HTTPS**: Secure connections
- **Input Validation**: XSS prevention
- **Session Management**: Secure sessions
- **Privacy**: GDPR compliance

## 📊 Analytics & Monitoring

### Page Tracking
- **Google Analytics**: Page view tracking
- **Custom Events**: User interaction tracking
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: JavaScript error monitoring

### User Behavior
- **Heatmaps**: Click and scroll tracking
- **Session Recording**: User journey analysis
- **A/B Testing**: Conversion optimization
- **Funnel Analysis**: Drop-off point identification

## 🧪 Testing Strategy

### Unit Testing
```typescript
// Page component testing
test('renders home page correctly', () => {
  render(<HomePage />)
  expect(screen.getByText('Get Started Today')).toBeInTheDocument()
})
```

### Integration Testing
```typescript
// Route testing
test('redirects unauthenticated users to login', async () => {
  render(<ProtectedRoute><Dashboard /></ProtectedRoute>)
  await waitFor(() => {
    expect(window.location.pathname).toBe('/login')
  })
})
```

### E2E Testing
```typescript
// User journey testing
test('complete registration flow', async () => {
  await page.goto('/register')
  await page.fill('[name="email"]', 'test@example.com')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
```

## 🔄 Maintenance

### Route Updates
- **Version Control**: Git-based deployment
- **Rollback**: Quick rollback capability
- **Monitoring**: Route health monitoring
- **Documentation**: Route documentation

### Content Management
- **CMS Integration**: Content updates
- **SEO Optimization**: Meta tags and sitemaps
- **Performance**: Regular performance audits
- **Accessibility**: Regular a11y audits

---

*This page structure provides a comprehensive, accessible, and performant user experience across all devices and user roles.* 