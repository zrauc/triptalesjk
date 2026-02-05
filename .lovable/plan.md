

# TripTales - Hackathon Demo Website

## Overview
A clean, professional frontend-only travel itinerary platform focused exclusively on **Jammu & Kashmir tourism**. Community-driven with admin approval for quality control.

---

## Branding & Design System

### Color Palette (from logo)
- **Primary**: Teal/Turquoise (main buttons, accents)
- **Secondary**: Warm Orange/Amber (highlights, CTAs)
- **Accent**: Deep Navy Blue (text, headers)
- **Background**: Clean white with subtle gray sections

### Typography & Style
- Clean, readable fonts
- Card-based layouts
- Desktop-first design
- Consistent spacing and visual hierarchy

---

## Pages to Build

### 1. Home / Landing Page
- **Header**: Navigation with logo + nav links (Home, Explore, About, Admin)
- **Hero Section**: 
  - Logo prominently displayed
  - Slogan: "Plan smarter. Travel better."
  - Brief intro: "Discover authentic travel itineraries for Jammu & Kashmir, shared and rated by real travelers"
  - Two CTA buttons: "Explore Itineraries" & "Create Itinerary"
- **How It Works Section**: 3 illustrated steps
  1. Explore real itineraries from fellow travelers
  2. Community rates and reviews them
  3. Admin approval ensures quality & authenticity
- **Footer**: Simple with copyright and links

### 2. Explore Itineraries Page
- **Filter Sidebar** (visual, non-functional):
  - Budget range slider
  - Duration (1-3 days, 4-7 days, 7+ days)
  - Region dropdown (Kashmir Valley, Jammu, Ladakh Region)
- **Itinerary Cards Grid** (6-8 dummy cards):
  - Destination image/placeholder
  - Trip title (e.g., "7 Days in Kashmir Valley")
  - Destination name
  - Duration badge
  - Budget range
  - Star rating (4.5/5 style)
  - "View Details" button
- Locations to feature: Srinagar, Gulmarg, Pahalgam, Sonamarg, Patnitop, Vaishno Devi

### 3. About / Trust & Credibility Page
- **Why TripTales Exists**: Problem statement about scattered, unreliable travel info
- **Our Mission**: Promoting authentic J&K tourism through real traveler experiences
- **Trust Pillars** (3 cards):
  1. Real Travelers, Real Stories
  2. Community-Driven Ratings
  3. Admin-Verified Quality
- **The Problem We Solve**: Issues with sponsored content, fake reviews, outdated info
- **Focused on Jammu & Kashmir**: Explanation of regional focus and authenticity

### 4. Admin Approval Page (Mock UI)
- **Header**: "Admin Dashboard - Itinerary Approvals"
- **Stats Bar**: Pending (3), Approved (12), Rejected (2)
- **Submission List Table/Cards**:
  - Itinerary title
  - Submitted by (username)
  - Destination
  - Submission date
  - Status badge (Pending/Approved/Rejected)
  - Action buttons: Approve / Reject (visual only)
- **Note**: Quality control disclaimer explaining the approval process

---

## Navigation Flow
```
Home → Explore Itineraries → [View cards]
     → Create Itinerary → [Form placeholder or coming soon]
     → About → [Trust info]
     → Admin → [Mock dashboard]
```

---

## Dummy Data
Will create 6-8 sample itineraries featuring:
- Kashmir Valley trips (Srinagar, Dal Lake, Gulmarg, Pahalgam)
- Jammu region trips (Vaishno Devi, Patnitop)
- Various budgets (₹15,000 - ₹80,000)
- Different durations (3-10 days)
- Realistic ratings (3.8 - 4.9 stars)

---

## Technical Approach
- React with TypeScript
- Tailwind CSS for styling
- React Router for page navigation
- Static dummy data (no backend)
- Component-based architecture for reusability

