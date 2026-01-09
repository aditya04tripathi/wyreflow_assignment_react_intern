# Wyreflow About Page - React Migration

A modern, responsive React implementation of the Wyreflow About page, migrated from the original static HTML/CSS/JavaScript website.

## 🔗 Original Website

**Original Page**: [https://wyreflow.com/pages-html/about.html](https://wyreflow.com/pages-html/about.html)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Improvements](#key-improvements-over-original-website)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Responsive Design](#responsive-design)
- [Development](#development)

## Overview

This project is a complete React migration of Wyreflow's About page, maintaining pixel-perfect visual fidelity while introducing modern development practices, improved performance, and enhanced mobile responsiveness.

## Key Improvements Over Original Website

### 1. **Enhanced Mobile Responsiveness**

- **Improved Touch Targets**: All interactive elements (buttons, links) now meet the 44x44px minimum touch target size for better mobile usability
- **Better Text Readability**: Increased font sizes on mobile devices for improved readability
  - Banner heading: `1.1rem` → `1.5rem`
  - Banner description: `0.55rem` → `0.9rem`
  - Button text: `0.35rem` → `0.75rem`
- **Optimized Spacing**: Better padding and margins for mobile screens
- **Improved Dropdown Navigation**: Changed from cramped grid layout to clean indented list format on mobile
- **Enhanced Section Heights**: Dynamic height adjustments ensure content is fully visible on all screen sizes

### 2. **Component-Based Architecture**

- **Modular Design**: Split monolithic HTML into reusable React components
- **Better Maintainability**: Each section is now an independent, testable component
- **Code Organization**: Clear separation of concerns with dedicated folders for features, shared components, and UI elements

### 3. **Improved Code Organization**

- **Modular CSS**: Separated styles into component-specific CSS files instead of one large stylesheet
- **Type Safety**: Full TypeScript implementation for better developer experience and fewer runtime errors
- **Modern Build System**: Vite for faster development and optimized production builds

### 4. **Performance Optimizations**

- **Code Splitting**: Automatic code splitting for faster initial page loads
- **Optimized Assets**: Better asset management and lazy loading capabilities
- **Tree Shaking**: Unused code is automatically removed in production builds
- **Modern JavaScript**: ES6+ features for cleaner, more efficient code

### 5. **Developer Experience**

- **Hot Module Replacement**: Instant updates during development without full page reloads
- **TypeScript**: Type checking prevents common errors before runtime
- **Component Reusability**: Shared components reduce code duplication
- **Better Debugging**: React DevTools integration for easier debugging

### 6. **Accessibility Improvements**

- **Semantic HTML**: Proper use of semantic elements throughout
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Better ARIA labels and semantic structure
- **Focus Management**: Improved focus states for better navigation

### 7. **Modern Development Practices**

- **Version Control Ready**: Proper project structure for Git workflows
- **Scalable Architecture**: Easy to add new features and sections
- **Testing Ready**: Component structure makes unit and integration testing straightforward
- **Documentation**: Comprehensive README and code comments

## Tech Stack

- **React 18.3** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **CSS3** - Modern styling with custom properties
- **Boxicons** - Icon library for UI elements

## Features

### 1. **Animated Loader**

- Smooth loading animation on initial page load
- Automatically hides after content is ready

### 2. **Responsive Navigation**

- Desktop: Full horizontal navigation with dropdown menus
- Mobile: Hamburger menu with clean, indented dropdown lists
- Smooth transitions and hover effects

### 3. **Hero Section**

- Full-screen hero with animated background
- Responsive text sizing
- Call-to-action elements

### 4. **At a Glance Section**

- Tabbed interface for different content views
- Smooth tab transitions
- Responsive image and text layout

### 5. **Vision/Purpose/Value Section**

- Interactive carousel with navigation arrows
- Smooth content transitions
- Mobile-optimized layout

### 6. **Banner Section**

- Full-width background image
- Prominent call-to-action button
- Responsive text and button sizing

### 7. **FAQ Section**

- Accordion-style expandable questions
- Smooth expand/collapse animations
- Mobile-optimized spacing

### 8. **Footer**

- Social media links with icons
- Categorized service and industry links
- Responsive multi-column layout
- Bottom bar with copyright and social icons

## Responsive Design

The application is fully responsive with breakpoints at:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

### Mobile Optimizations

- Touch-friendly button sizes (minimum 44x44px)
- Readable font sizes (minimum 1rem for body text)
- Optimized spacing and padding
- Single-column layouts for better content flow
- Collapsible navigation menu
- Vertical list dropdowns instead of grids

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- CSS modules for component-specific styles
- Semantic HTML5 elements
- Mobile-first responsive design

### Component Guidelines

1. Keep components focused and single-purpose
2. Use TypeScript for all new components
3. Import component-specific CSS at the top of each component
4. Follow existing naming conventions
5. Ensure mobile responsiveness for all new features

## Styling Approach

- **No CSS Framework**: Pure CSS for maximum control and performance
- **Component-Scoped Styles**: Each component has its own CSS file
- **Mobile-First**: Base styles target mobile, with media queries for larger screens
- **CSS Custom Properties**: Used for consistent theming
- **BEM-like Naming**: Clear, descriptive class names

## License

This project is part of an assignment for Wyreflow Technologies.

## Acknowledgments

- Original design and content by [Wyreflow Technologies](https://wyreflow.com)
- Icons by [Boxicons](https://boxicons.com)
- Fonts: Satoshi and Roboto from Google Fonts
