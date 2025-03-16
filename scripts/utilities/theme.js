// Theme Manager Script
// Handles theme selection and application across the site

// Define themes
const themes = {
    default: {
        name: "Default",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdNIejFmjeKC5u6Xq2yqOCa5y-uJseTCTfA&s')",
        particleColor: "#ffffff",
        particleLinks: "#ffffff"
    },
    vanilla: {
        name: "Vanilla Iced Coffee",
        background: "linear-gradient(135deg, #e8e1c6 0%, #d6cdb0 100%)",
        particleColor: "#d6cdb0",
        particleLinks: "#c7bd97"
    },
    caramel: {
        name: "Caramel Iced Coffee",
        background: "linear-gradient(135deg, #cc9544 0%, #a3742d 100%)",
        particleColor: "#cc9544",
        particleLinks: "#a3742d"
    },
    chocolate: {
        name: "Chocolate Mocha",
        background: "linear-gradient(135deg, #5a3925 0%, #3b2516 100%)",
        particleColor: "#8c6248",
        particleLinks: "#5a3925"
    },
    strawberry: {
        name: "Strawberry Fun",
        background: "linear-gradient(135deg, #d8a7d8 0%, #b987b9 100%)",
        particleColor: "#d8a7d8",
        particleLinks: "#b987b9"
    }
};

// Get current theme
function getCurrentTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    return themes[savedTheme] || themes.default;
}

// Apply theme to page
function applyTheme(themeName) {
    if (!themes[themeName]) {
        console.error('Theme not found:', themeName);
        return;
    }
    
    console.log('Applying theme:', themeName);
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', themeName);
    
    const theme = themes[themeName];
    
    // Apply background
    document.body.style.background = theme.background;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
    
    // Apply to particles if they exist
    if (window.pJSDom && window.pJSDom.length > 0) {
        try {
            const pJS = window.pJSDom[0].pJS;
            if (pJS && pJS.particles && pJS.particles.color) {
                pJS.particles.color.value = theme.particleColor;
                pJS.particles.line_linked.color = theme.particleLinks;
                pJS.fn.particlesRefresh();
            }
        } catch (e) {
            console.error('Error updating particles colors:', e);
        }
    }
    

// Apply theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
});

// Also try to apply immediately in case DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
}

// Make functions globally available
window.applyTheme = applyTheme;
window.getCurrentTheme = getCurrentTheme;
window.themesList = themes; 
