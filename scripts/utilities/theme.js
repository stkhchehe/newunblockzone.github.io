// Theme Manager Script
// Handles theme selection and application across the site

// Define themes
const themes = {
    default: {
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdNIejFmjeKC5u6Xq2yqOCa5y-uJseTCTfA&s') no-repeat center center fixed",
        boxShadowColor: "255, 255, 255",
        particleColor: "#ffffff",
        particleLinks: "#ffffff"
    },
    vanilla: {
        background: "linear-gradient(135deg, #e8e1c6 0%, #d6cdb0 100%)",
        boxShadowColor: "232, 225, 198",
        particleColor: "#e8e1c6",
        particleLinks: "#d6cdb0"
    },
    caramel: {
        background: "linear-gradient(135deg, #cc9544 0%, #a3742d 100%)",
        boxShadowColor: "204, 149, 68",
        particleColor: "#cc9544",
        particleLinks: "#a3742d"
    },
    chocolate: {
        background: "linear-gradient(135deg, #5a3925 0%, #3b2516 100%)",
        boxShadowColor: "90, 57, 37",
        particleColor: "#5a3925",
        particleLinks: "#3b2516"
    },
    strawberry: {
        background: "linear-gradient(135deg, #d8a7d8 0%, #b987b9 100%)",
        boxShadowColor: "216, 167, 216",
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
    
    // Save the selected theme
    localStorage.setItem('selectedTheme', themeName);
    
    const theme = themes[themeName];
    
    // Update background
    document.body.style.background = theme.background;
    document.body.style.backgroundSize = 'cover';
    
    // Update particles if they exist
    try {
        if (window.pJS && window.pJS.particles && window.pJS.particles.color) {
            window.pJS.particles.color.value = theme.particleColor;
            window.pJS.particles.line_linked.color = theme.particleLinks;
            window.pJS.fn.particlesRefresh();
        } else if (window.particlesJS) {
            // If pJS isn't initialized but particlesJS is available, reinitialize
            initializeParticles(theme);
        }
    } catch (e) {
        console.error('Error updating particles colors:', e);
    }
    
    // Update box shadows
    updateBoxShadows(theme.boxShadowColor);
    
    // If a page has particlesJS, but it hasn't been initialized yet, set up an observer
    if (typeof particlesJS !== 'undefined') {
        setupParticlesObserver(theme);
    }
}

// Update all box shadows with the theme color
function updateBoxShadows(colorRGB) {
    // Update CSS variable for box shadows
    document.documentElement.style.setProperty('--theme-box-shadow-color', colorRGB);
    
    // Create or update a style tag for elements that need the theme color
    let styleEl = document.getElementById('theme-box-shadow-styles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-box-shadow-styles';
        document.head.appendChild(styleEl);
    }
    
    // Update the box shadow styles
    styleEl.textContent = `
    .icon-container, .icon-container-homepage, .app-box, .game-box, 
    .long-rectangle, .emergency-card, .tab-cloak-card {
        box-shadow: 0 0 10px rgba(${colorRGB}, 0.7);
    }
    
    .theme-circle {
        box-shadow: 0 0 5px rgba(${colorRGB}, 0.7);
    }
    
    .theme-circle:hover, .icon-container:hover, .icon-container-homepage:hover,
    .app-box:hover, .game-box:hover {
        box-shadow: 0 0 20px rgba(${colorRGB}, 0.9);
    }
    
    .coolBlobIdk {
        box-shadow: 0 0 120px rgba(${colorRGB}, 0.5);
    }
    `;
}

// Initialize particles with theme colors
function initializeParticles(theme) {
    if (typeof particlesJS === 'undefined' || !document.getElementById('particles-js')) return;
    
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 20, "density": { "enable": false } },
            "color": { "value": theme.particleColor },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": theme.particleLinks,
                "opacity": 0.4,
                "width": 1
            },
            "move": { 
                "enable": true, 
                "speed": 2, 
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { 
                "onhover": { "enable": false },
                "onclick": { "enable": false },
                "resize": true
            }
        },
        "retina_detect": false
    });
}

// Set up an observer to reinitialize particles when they're added to the DOM
function setupParticlesObserver(theme) {
    // Check if particlesJS is loaded
    if (typeof particlesJS === 'undefined') return;
    
    // Use MutationObserver to detect when particles container is added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.id === 'particles-js') {
                    // Initialize particles with theme colors
                    particlesJS("particles-js", {
                        "particles": {
                            "number": { "value": 20, "density": { "enable": false } },
                            "color": { "value": theme.particleColor },
                            "shape": { "type": "circle" },
                            "opacity": { "value": 0.5, "random": true },
                            "size": { "value": 3, "random": true },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": theme.particleLinks,
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": { 
                                "enable": true, 
                                "speed": 2, 
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": { 
                                "onhover": { "enable": false },
                                "onclick": { "enable": false },
                                "resize": true
                            }
                        },
                        "retina_detect": false
                    });
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
});

// Try to apply immediately in case DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
}

// Make theme functions globally available
window.applyTheme = applyTheme;
window.getCurrentTheme = getCurrentTheme;
window.themesList = themes; 
