// App data object containing all apps information
const appsData = [
    {
        id: "gmail",
        name: "Gmail",
        url: "/a/gmail.html",
        iframeUrl: "https://mail.google.com",
        imageUrl: "placeholder-image-url", // Update this with a real image URL
        popular: false,
        new: true,
        category: "productivity"
    },
    {
        id: "spotify",
        name: "Spotify",
        url: "/a/spotify.html",
        iframeUrl: "https://open.spotify.com/embed",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
        popular: true,
        new: false,
        category: "music"
    },
    {
        id: "youtube",
        name: "YouTube",
        url: "/a/youtube.html",
        iframeUrl: "https://www.youtube.com/embed?feature=oembed",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
        popular: true,
        new: false,
        category: "video"
    },
    {
        id: "discord",
        name: "Discord",
        url: "/a/discord.html",
        iframeUrl: "https://discord.com/app",
        imageUrl: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
        popular: true,
        new: false,
        category: "social"
    },
    {
        id: "tiktok",
        name: "TikTok",
        url: "/a/tiktok.html",
        iframeUrl: "https://www.tiktok.com/embed",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/017/743/717/original/tiktok-icon-logo-symbol-free-png.png",
        popular: true,
        new: false,
        category: "social"
    },
    {
        id: "reddit",
        name: "Reddit",
        url: "/a/reddit.html",
        iframeUrl: "https://www.reddit.com",
        imageUrl: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
        popular: true,
        new: false,
        category: "social"
    }
];

// App categories for organization
const appCategories = [
    {
        id: "popular",
        name: "Popular Apps"
    },
    {
        id: "social",
        name: "Social Media"
    },
    {
        id: "music",
        name: "Music"
    },
    {
        id: "video",
        name: "Video"
    },
    {
        id: "productivity",
        name: "Productivity"
    }
];

// Export the data for use in other files
module.exports = { appsData, appCategories }; 