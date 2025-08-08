# Changelog Page Guide

The Changelog Page layout is designed to display version updates and changes with a clear structure and timeline.

## Overview

- Version timeline in chronological order
- Categorized changes (added, fixed, improved, etc.)
- SEO-friendly structured content
- Responsive design
- Clean layout focused on content

## Basic Example

### 1. Minimal configuration

```markdown
---
layout: changelog
title: Changelog
description: Record version updates and changes
---

# Changelog

## [1.2.0] - 2024-01-20

### Added
- User permission management
- Batch operations

### Fixed
- Data export issue
- Mobile display issues

### Improved
- Page load performance
- UI design

## [1.1.0] - 2024-01-10

### Added
- Search feature
- Multi-language switch

### Fixed
- Login state issue
```

### 2. With icons and colors

```markdown
---
layout: changelog
title: Product Changelog  
description: Continuous improvements for a better experience
---

# Product Changelog

All major changes are recorded here.

## [2.1.0] - 2024-01-25 🎉

### ✨ New Features
- Smart recommendation system
- Real-time collaboration
- Plugin marketplace

### 🐛 Bug Fixes  
- Fixed large file upload failures
- Fixed dark mode display issues
- Improved search accuracy

### ⚡ Performance
- DB query optimization, +40% response speed
- Asset compression, +30% page load speed
- Memory optimization, −20% memory usage

### 🎨 UI Improvements
- New UI design
- Better mobile experience
- Improved color contrast and accessibility

## [2.0.1] - 2024-01-15 🔧

### 🐛 Hotfixes
- Security updates
- Data sync issue
- Login issues for some users

## [2.0.0] - 2024-01-01 🚀

### 🎉 Major Update
Massive new features and improvements.

### ✨ Added
- New architecture
- API v2
- Single sign-on
- Advanced analytics

### 💥 Breaking Changes
- v1 API will be deprecated in 6 months
- Database schema changes, run migrations
- Config file format update

### 📚 Docs
- New user guide
- Rewritten API docs
- New video tutorials

---

## Versioning

We follow [Semantic Versioning](https://semver.org/):

- Major — incompatible API changes
- Minor — backwards-compatible functionality
- Patch — backwards-compatible bug fixes

## Change Types

- 🎉 Major
- ✨ Added
- 🐛 Fixed
- ⚡ Performance
- 🎨 UI/UX
- 📚 Docs
- 🔧 Maintenance
- 💥 Breaking
- 🔒 Security
```