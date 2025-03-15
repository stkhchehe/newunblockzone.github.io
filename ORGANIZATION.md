# UnblockZone Project Organization

This document explains the new organization of the UnblockZone project files.

## Directory Structure

The project is now organized into the following directories:

- `/` - Root directory containing main HTML pages
- `/data` - Data files with structured information
- `/templates` - Template HTML files for rendering content
- `/scripts` - JavaScript files organized by purpose
  - `/scripts/content-management` - Scripts for adding and managing content
  - `/scripts/utilities` - Utility scripts for common functionality
  - `/scripts/update-scripts` - Migration and update tools
- `/g` - Individual game HTML files (legacy, to be migrated)
- `/a` - Individual app HTML files (legacy, to be migrated)
- `/m` - Individual movie HTML files (legacy, to be migrated)
- `/active` - Proxy and backend files

## Main Pages

- `index.html` - Homepage
- `g.html` - Games listing page
- `a.html` - Apps listing page
- `m.html` - Movies listing page
- `s.html` - Settings page
- `e.html` - Exploits page

## Data Files

All structured data is now in the `/data` directory:

- `data/data-games.js` - Game information in JSON format
- `data/data-apps.js` - App information in JSON format
- `data/data-movies.js` - Movie information in JSON format

## Templates

Content templates are now in the `/templates` directory:

- `templates/game.html` - Template for displaying games
- `templates/app.html` - Template for displaying apps
- `templates/game-player.html` - Alternative game player template
- `templates/app-player.html` - Alternative app player template

## Scripts

JavaScript files are organized by purpose:

### Content Management Scripts

- `scripts/content-management/content-manager.js` - Combined functionality for adding games, apps, and movies
- `scripts/content-management/add-new-game.js` - Script for adding new games (legacy)
- `scripts/content-management/add-new-app.js` - Script for adding new apps (legacy)

### Utility Scripts

- `scripts/utilities/tab-features.js` - Tab cloaking and anti-close functionality
- `scripts/utilities/shared.js` - Shared functionality used across pages
- `scripts/utilities/tab-cloak.js` - Legacy tab cloaking script

### Update Scripts

- `scripts/update-scripts/migration-tools.js` - Combined migration functionality
- `scripts/update-scripts/update-file-paths.js` - Script to update file paths after reorganization
- `scripts/update-scripts/a-update.js` - Legacy script for updating app pages
- `scripts/update-scripts/g-update.js` - Legacy script for updating game pages
- `scripts/update-scripts/fix-home-links.js` - Legacy script for fixing home links
- `scripts/update-scripts/fix-special-games.js` - Legacy script for fixing special games

## Moving Forward

The project is transitioning to a template-based system with centralized data files. This will make it easier to:

1. Add new content by simply updating the data files
2. Maintain consistent styling and functionality across all content
3. Update multiple pages at once by modifying the templates

The legacy individual HTML files (in `/g`, `/a`, and `/m` directories) will eventually be phased out in favor of the template system.

## Running Update Scripts

To complete the migration to the new directory structure, you can run the following scripts:

1. `node scripts/update-scripts/update-file-paths.js` - Update file paths in HTML files
2. `node scripts/update-scripts/migration-tools.js` - Migrate content to use templates 