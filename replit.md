# Trendy Topic - Korean Trend Discussion Platform

## Overview

This is a modern web application built with React, TypeScript, and Node.js that displays trending topics with an interactive carousel interface. The application features a Korean-style design with pink-to-purple gradient themes and social engagement metrics. Currently uses static data for demonstration purposes, designed to showcase trending topics in categories like technology, environment, and food.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom gradient themes and Korean typography (Noto Sans KR)
- **State Management**: Static data display (no server state management needed currently)
- **Routing**: Wouter for client-side routing
- **Component Library**: Interactive carousel, responsive navigation, and feature cards

### Backend Architecture
- **Framework**: Express.js with TypeScript (minimal setup)
- **Development**: Hot reload with tsx, production builds with esbuild
- **Static Serving**: Serves frontend assets and handles routing

### Data Structure
- **Static Topic Data**: Predefined trending topics with engagement metrics
- **No Database**: Currently uses hardcoded data in components
- **Future Integration**: Schema prepared for database integration

## Key Components

### Interactive Carousel
- Custom carousel component with manual and auto navigation
- Three predefined slides: AI/Tech, Sustainability, K-Food
- Touch/swipe support for mobile devices
- Responsive design with optimized mobile layout
- Gradient backgrounds: pink-purple, emerald-cyan, orange-pink

### Responsive Design
- Mobile-first approach with breakpoint-specific styling
- Optimized navigation arrows and indicators for mobile
- Responsive typography and spacing
- Mobile menu support

### Feature Section
- Three feature cards showcasing platform benefits
- Custom gradient backgrounds (pink-purple, red-pink, indigo-cyan)
- Icons: Bolt (실시간 업데이트), TrendingUp (데이터 기반 분석), Globe (글로벌 커뮤니티)

## Recent Changes

### June 28, 2025 - Code Cleanup and Mobile Optimization
- Fixed CSS import order to resolve Vite warnings
- Optimized carousel for mobile responsiveness
- Updated feature section with requested icon and color changes
- Removed unused imports and dependencies
- Simplified schema and storage to reflect static data usage
- Improved navigation arrow visibility on mobile devices
- Updated Korean content and consistent branding

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM)
- Express.js with TypeScript support
- Vite for build tooling and development server

### UI and Styling
- Radix UI component primitives for accessibility
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Noto Sans KR for Korean typography

### Development Tools
- TypeScript for type safety
- ESBuild for production bundling
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Runs on Node.js 20
- Hot reload development server on port 5000
- Vite dev server with middleware mode integration

### Production Build
- Vite builds frontend to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving for client assets
- Ready for Replit deployment

### Replit Configuration
- Autoscale deployment target
- Workflow execution on port 5000
- Clean codebase ready for deployment

## User Preferences

Preferred communication style: Simple, everyday language.