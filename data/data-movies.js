// Movie data for unblockzone
const moviesData = [
    {
        id: "deadpool-wolverine",
        name: "Deadpool & Wolverine",
        url: "/m/deadpool-wolverine.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt6263850",
        imageUrl: "https://image.tmdb.org/t/p/w500/kqFqzUYZyebjuA5nFPiBdSJ1c9a.jpg",
        popular: true,
        new: true,
        category: "action"
    },
    {
        id: "fnaf",
        name: "Five Nights at Freddy's",
        url: "/m/fnaf.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt4589218",
        imageUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        popular: true,
        new: false,
        category: "horror"
    },
    {
        id: "inside-out-2",
        name: "Inside Out 2",
        url: "/m/inside-out-2.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt10366206",
        imageUrl: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYSMU.jpg",
        popular: true,
        new: true,
        category: "animation"
    },
    {
        id: "a-quiet-place-day-one",
        name: "A Quiet Place: Day One",
        url: "/m/a-quiet-place-day-one.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt16226962",
        imageUrl: "https://image.tmdb.org/t/p/w500/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg",
        popular: true,
        new: true,
        category: "horror"
    },
    {
        id: "alien-romulus",
        name: "Alien: Romulus",
        url: "/m/alien-romulus.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt11804152",
        imageUrl: "https://image.tmdb.org/t/p/w500/78Ik3LDlZ72y3QOv3XM2qsZYArG.jpg",
        popular: true,
        new: true,
        category: "horror"
    },
    {
        id: "terrifier",
        name: "Terrifier",
        url: "/m/terrifier.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt4281724",
        imageUrl: "https://image.tmdb.org/t/p/w500/10H7mMvzGD9PzJxv1kXz3m7ilic.jpg",
        popular: false,
        new: false,
        category: "horror"
    },
    {
        id: "terrifier-2",
        name: "Terrifier 2",
        url: "/m/terrifier-2.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt10403420",
        imageUrl: "https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
        popular: false,
        new: false,
        category: "horror"
    },
    {
        id: "terrifier-3",
        name: "Terrifier 3",
        url: "/m/terrifier-3.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt22687790",
        imageUrl: "https://image.tmdb.org/t/p/w500/k47cSL3HTt0PHjrgFQgeD37JEw7.jpg",
        popular: false,
        new: true,
        category: "horror"
    },
    {
        id: "godzilla-vs-kong",
        name: "Godzilla vs. Kong",
        url: "/m/godzilla-vs-kong.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt5034838",
        imageUrl: "https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        popular: true,
        new: false,
        category: "action"
    },
    {
        id: "venom-the-last-dance",
        name: "Venom: The Last Dance",
        url: "/m/venom-the-last-dance.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt12260334",
        imageUrl: "https://image.tmdb.org/t/p/w500/jyjr9i9RqO1gHVJBL0tIxPM5FfK.jpg",
        popular: true,
        new: true,
        category: "action"
    },
    {
        id: "it",
        name: "IT",
        url: "/m/it.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt1396484",
        imageUrl: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        popular: true,
        new: false,
        category: "horror"
    },
    {
        id: "it-chapter-2",
        name: "IT Chapter Two",
        url: "/m/it-chapter-2.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt7349950",
        imageUrl: "https://image.tmdb.org/t/p/w500/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        popular: true,
        new: false,
        category: "horror"
    },
    {
        id: "whinne-the-pooh-horror",
        name: "Winnie-the-Pooh: Blood and Honey",
        url: "/m/whinne-the-pooh-horror.html",
        iframeUrl: "https://vidsrc.to/embed/movie/tt19623240",
        imageUrl: "https://image.tmdb.org/t/p/w500/fNTtVbqI92abEKAgz2ynurCUne.jpg",
        popular: false,
        new: false,
        category: "horror"
    }
];

// Movie categories for organization
const movieCategories = [
    {
        id: "popular",
        name: "Popular Movies"
    },
    {
        id: "new",
        name: "New Releases"
    },
    {
        id: "action",
        name: "Action Movies"
    },
    {
        id: "horror",
        name: "Horror Movies"
    },
    {
        id: "animation",
        name: "Animated Movies"
    },
    {
        id: "comedy",
        name: "Comedy Movies"
    }
];

// Export the data for use in other files
module.exports = { moviesData, movieCategories }; 