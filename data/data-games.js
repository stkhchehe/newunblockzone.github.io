// Game data for unblockzone
const gamesData = [
  {
    id: "pacman",
    name: "Pacman",
    url: "/g/pacman.html",
    iframeUrl: "https://www.google.com/logos/2010/pacman10-i.html",
    imageUrl: "placeholder-image-url", // Update this with a real image URL
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "arcade"
  },
  {
    id: "minecraft",
    name: "minecraft",
    url: "/g/minecraft.html",
    iframeUrl: "https://frogiesarca.de/compiled/minecraft/survival/",
    imageUrl: "https://gaming-cdn.com/images/news/articles/7191/cover/minecraft-gets-a-new-artwork-cover66856ea7d02ad.jpg",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  {
    id: "subway-surfers",
    name: "subway surfers",
    url: "/g/subway-surfers.html",
    iframeUrl: "https://subwaysurfers.com/media/f2ldlfpi/subwaysurfers_01.png",
    imageUrl: "https://subwaysurfers.com/media/f2ldlfpi/subwaysurfers_01.png",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  {
    id: "block-blast",
    name: "block blast",
    url: "/g/block-blast.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbz7CYwoe4wulDfOJ5Z5sUZOCiX0QfzRhqQ&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  {
    id: "granny-offline",
    name: "Granny Offline",
    url: "/g/granny-offline.html",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOGI1ZTI2NmQtZWRkOS00OWE5LThiZjItMjA2MzYzNzNlMzMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  {
    id: "shell-shockers",
    name: "Shell Shockers",
    url: "/g/shell-shockers.html",
    imageUrl: "https://staticg.sportskeeda.com/editor/2024/10/783ff-17280361172197-1920.jpg?w=640",
    popular: false,
    new: false,
    broken: true,
    fullscreenReload: true,
    category: "action"
  },
  // Add more games here as needed
  {
    id: "granny-3-ultimate-escape",
    name: "Granny 3: Ultimate Escape",
    url: "/g/granny-3-ultimate-escape.html",
    imageUrl: "https://horrorgames.io/cache/data/image/game/granny-3-the-ultimate-escape-challenge-horror1-f180x180.png",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  {
    id: "papas-pizzeria",
    name: "papas pizzeria",
    url: "/g/papas-pizzeria.html",
    imageUrl: "https://i.ytimg.com/vi/TWPqPL-8aVE/maxresdefault.jpg",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  
  // Additional Popular Games
  {
    id: "slope",
    name: "slope",
    url: "/g/slope.html",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/016/204/675/large/sean-young-slope-cover2.jpg?1551223990",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "geometry-dash",
    name: "geometry dash",
    url: "/g/geometry-dash.html",
    imageUrl: "https://i.ytimg.com/vi/jTIqc5zybDI/maxresdefault.jpg",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "flappy-bird",
    name: "flappy bird",
    url: "/g/flappy-bird.html",
    imageUrl: "https://play-lh.googleusercontent.com/8dbtPxI2dXXWbdSzJh-YN7yCxCLXlcRQjDkL_rsd-EJuOeH4QuJZ0IdLOLFJHzJTCC0=w526-h296-rw",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  {
    id: "2048",
    name: "2048",
    url: "/g/2048.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r-IMLLIqyg1N_EHFR0FJwbMQQfDwkWEayw&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "puzzle"
  },
  {
    id: "cookie-clicker",
    name: "cookie clicker",
    url: "/g/cookie-clicker.html",
    imageUrl: "https://codehs.com/uploads/e6a186e2a384e8dd66af6a15c9c0c848",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  {
    id: "run-3",
    name: "run 3",
    url: "/g/run-3.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-aVUiDFc1-oadRkP_W9zz4G1aOC2k9GF1A&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "retro-bowl",
    name: "retro bowl",
    url: "/g/retro-bowl.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYdqufcQQKFaQDaEgKTXBx7kKfFvulKAOGg&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "tunnel-rush",
    name: "tunnel rush",
    url: "/g/tunnel-rush.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXLbunMBbkWA_zRR4eeP0BfeEAXGFhLIkHg&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "wordle",
    name: "wordle",
    url: "/g/wordle.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzdcxfO8y2zI8Whe9ieaUGrLcRj2m9xbh7Q&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "puzzle"
  },
  {
    id: "drift-hunters",
    name: "drift hunters",
    url: "/g/drift-hunters.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFU8EM8gCotl5Q-x5nZ7s8NCET-DMZYBzQw&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "1v1-lol",
    name: "1v1.lol",
    url: "/g/1v1-lol.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiUGRJmdPJQyW7EFedpxrLiXw84IlIESG7A&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "just-fall-lol",
    name: "just fall.lol",
    url: "/g/just-fall-lol.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRlh_kY3k1h-hFbxZDJV-x5kMQq22XJ-9VQ&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "among-us",
    name: "among us",
    url: "/g/among-us.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs04ATSbMCHQDXK9XdOb9RIXdnXc7g_xWWRQ&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  
  // Horror Games
  {
    id: "five-nights-at-freddys",
    name: "five nights at freddy's",
    url: "/g/five-nights-at-freddys.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbQ-XEuU1V9cJ1q4q-MxurTYfQzYYLFzjCQ&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  {
    id: "backrooms",
    name: "backrooms",
    url: "/g/backrooms.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GH63wJJPooZ9hKS2iFnfOCDc9OfsyEgkvw&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  {
    id: "scp-096",
    name: "scp-096",
    url: "/g/scp-096.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwii0ksRxOdcFEQwJnIoMLpWquswZOTyMgA&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  
  // Puzzle Games
  {
    id: "chess",
    name: "chess",
    url: "/g/chess.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjP6Z2y5UnL28ETYhAKhJ90iDOcl5-R7BR5g&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "puzzle"
  },
  {
    id: "tetris",
    name: "tetris",
    url: "/g/tetris.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S2MCGvgZ43wKPzXCSCLv9gGbgwNK6F_ORA&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "puzzle"
  },
  {
    id: "sudoku",
    name: "sudoku",
    url: "/g/sudoku.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykBhSkqPHSz_3b-wHsOpcBErdnNQNE4TE1A&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "puzzle"
  },
  
  // Simulation Games
  {
    id: "papas-freezeria",
    name: "papas freezeria",
    url: "/g/papas-freezeria.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocuq4pjszqjDVJHH2OqIX6bIgbIZv6YbP-A&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  {
    id: "papas-burgeria",
    name: "papas burgeria",
    url: "/g/papas-burgeria.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuRfPhZYLMKuYgP_CJ4bpCXVE_7Rm-MUhOw&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  {
    id: "happy-wheels",
    name: "happy wheels",
    url: "/g/happy-wheels.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXuiztf9mCT-Gm7LmQcXn5wFN9S2sPWaCWg&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  
  // Sports Games
  {
    id: "basketball-stars",
    name: "basketball stars",
    url: "/g/basketball-stars.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOkscEdb1ezOkY0e3HMeWKkcKnP9NXXPeuw&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "soccer-random",
    name: "soccer random",
    url: "/g/soccer-random.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZnrlLoPdrIJx4mVP-KQQZMYGYrQGYlzj0A&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "eaglercraft",
    name: "eaglercraft",
    url: "/g/eaglercraft.html",
    imageUrl: "https://i.ytimg.com/vi/XK-XfhfKu1I/maxresdefault.jpg",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "popular"
  },
  {
    id: "moto-x3m",
    name: "moto x3m",
    url: "/g/moto-x3m.html",
    imageUrl: "https://assets.funnygames.org/3/7425/87352/1200x1200/moto-x3m.jpg",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "smash-karts",
    name: "smash karts",
    url: "/g/smash-karts.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nKgw76t4Vt5Oz5X1u1h3qnv7-FDO7MbkXw&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "snake-io",
    name: "snake.io",
    url: "/g/snake-io.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5A-kEouRzrQM9c7b-4KoQXve2XhgBRYhlA&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "tiny-fishing",
    name: "tiny fishing",
    url: "/g/tiny-fishing.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rh23gRrp1qbXAdZe0mJNf2ivGt9GHlqtag&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  {
    id: "venge-io",
    name: "venge.io",
    url: "/g/venge-io.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hhsNnD9Isd9tU0Dby9BVM6XLh5pAF6UXwQ&s",
    popular: false,
    new: true,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "baldis-basics",
    name: "baldis basics",
    url: "/g/baldis-basics.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMwzXiyYbKJP9xLQANESngEPNFsE5-nZEpw&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "horror"
  },
  {
    id: "paper-io",
    name: "paper.io",
    url: "/g/paper-io.html",
    imageUrl: "https://play-lh.googleusercontent.com/i5UE8pMQZ9EN-n28ylD0kb8Ri6rRvzb9pFEaVxwZVhvPTnw2Oi3nBHGKoNV5HJEjlA=w720-h310-rw",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  
  // Adding missing games
  {
    id: "paper-io-2",
    name: "paper.io 2",
    url: "/g/paper-io-2.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmgIe-M7BilIJ6yAQLGkLxr2Kzx7zE1h5Dw&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "bitlife",
    name: "bitlife",
    url: "/g/bitlife.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEsBIcYIHyym_nGGkl1zTjQd-g8TvnRkl8g&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  },
  {
    id: "stickman-hook",
    name: "stickman hook",
    url: "/g/stickman-hook.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA_1HxBrqC-9rJCnBFdZQZ-ZXLd9z2H5O7Q&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "action"
  },
  {
    id: "rocket-league",
    name: "rocket league",
    url: "/g/rocket-league.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtQxsQ9Y4u55I_u6LPCG2qxdGW8B4ymRd3g&s",
    popular: true,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "sports"
  },
  {
    id: "idle-breakout",
    name: "idle breakout",
    url: "/g/idle-breakout.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY0JO3yQcD6N7GEc60p-vWd-U3Ij_3mD-ww&s",
    popular: false,
    new: false,
    broken: false,
    fullscreenReload: true,
    category: "simulation"
  }
];

// Categories for organizing games
const gameCategories = [
  { 
    id: "popular", 
    name: "Popular Games" 
  },
  { 
    id: "action", 
    name: "Action Games" 
  },
  { 
    id: "horror", 
    name: "Horror Games" 
  },
  { 
    id: "simulation", 
    name: "Simulation Games" 
  },
  { 
    id: "puzzle", 
    name: "Puzzle Games" 
  },
  { 
    id: "sports", 
    name: "Sports Games" 
  }
];

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { gamesData, gameCategories };
} 