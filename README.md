# UnblockZone

A website for accessing games and apps, designed with a focus on bypassing content filters.

## Features

- Games collection with standardized layout
- Apps collection with standardized layout
- Search functionality
- About:blank feature for enhanced privacy
- Consistent layout across all pages

## Game/App Management Scripts

Several scripts are available to help manage games and apps on the site:

### Adding New Games

To add a new game:

```bash
node add-new-game.js "Game Name" game-url-slug "https://iframe-source-url" [category]
```

Example:
```bash
node add-new-game.js "Monkey Mart" monkey-mart "https://x12maybeheat.vercel.app/games/monkeymart/index.html" action
```

### Adding New Apps

To add a new app:

```bash
node add-new-app.js "App Name" app-url-slug "https://iframe-source-url" [category]
```

Example:
```bash
node add-new-app.js "Gmail" gmail "https://mail.google.com" productivity
```

### Updating All Games/Apps

To update all game HTML files with the standard layout:

```bash
node update-all-games.js
```

To update all app HTML files with the standard layout:

```bash
node update-apps.js
```

### Fixing Special Games

Some games require special handling (like Unity WebGL games). To update these games:

```bash
node fix-special-games.js
```

You can add more special games by editing the `specialGames` array in `fix-special-games.js`.

### Fixing Home Links

If home buttons in game or app pages are pointing to the wrong URLs, you can fix them with:

```bash
node fix-home-links.js
```

## Project Structure

- `g/` - Contains individual game HTML files
- `a/` - Contains individual app HTML files
- `data-games.js` - Contains game data in JSON format
- `data-apps.js` - Contains app data in JSON format
- `shared.js` - Shared JavaScript functionality
- `g.html` - Main games page
- `a.html` - Main apps page
- `s.html` - Settings page
- Various utility scripts for managing the site

## Adding to data-games.js or data-apps.js

When adding a new entry manually to data-games.js, use this format:

```javascript
{
  id: "game-id",
  name: "Game Name",
  url: "/g/game-id.html",
  iframeUrl: "https://example.com/game",
  imageUrl: "https://example.com/image.jpg",
  popular: false,
  new: true,
  broken: false,
  fullscreenReload: true,
  category: "action"
},
```

## Game Categories

Available game categories:
- popular
- action
- puzzle
- arcade
- simulation
- sports
- horror

## App Categories

Available app categories:
- popular
- social
- productivity
- music
- video

## Repository Content
* In this repository, you will find a downloadable Html file that provides access to unblocked games and apps.

## Usage
* ### [DOWNLOAD HERE](https://github.com/unblockzone/ubzv3.github.io/archive/refs/heads/main.zip)

* To start playing Unblocked Games Github, you can download the apps/games from the link provided below.

## Instructions
* Download the html files from the link above.
* Launch the website on your computer.
* Star And Fork This repository
* Share to your friends

### Your Spot Here
* Contact me on discord: https://discord.gg/XRkQyY2Hhy

## Dynamic Template System

The website now uses a dynamic template system that eliminates the need for individual HTML files for each game or app. Instead, it uses:

1. `game.html` - A single template that dynamically loads game data based on URL parameters (e.g., `game.html?id=minecraft`)
2. `app.html` - A single template that dynamically loads app data based on URL parameters (e.g., `app.html?id=spotify`)

### How It Works

1. Game/app data is stored in `data-games.js` and `data-apps.js`
2. When a user clicks a game/app card on the main pages, they are directed to the template with the appropriate ID
3. The template reads the ID from the URL, looks up the data, and dynamically constructs the page

### Benefits

- No need to maintain hundreds of individual HTML files
- Adding new games/apps only requires updating the data files
- Consistent user experience across all games/apps
- Easier to deploy and maintain

### Migration Scripts

To convert from the old approach (individual HTML files) to the new template approach:

```bash
node g-update.js  # Update g.html to use the template for games
node a-update.js  # Update a.html to use the template for apps
```

These scripts will replace all links in the main pages to point to the template files instead of individual HTML files.
