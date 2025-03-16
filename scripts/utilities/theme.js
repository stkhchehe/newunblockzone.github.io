// Theme Manager Script
// Handles theme selection and application across the site

// Define themes
const themes = {
    default: {
        name: "Default",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdNIejFmjeKC5u6Xq2yqOCa5y-uJseTCTfA&s')",
        particleColor: "#ffffff",
        particleLinks: "#ffffff",
        boxShadowColor: "255, 255, 255",
        lightColor: "#ffffff"
    },
    vanilla: {
        name: "Vanilla Iced Coffee",
        background: "linear-gradient(135deg, #e8e1c6 0%, #d6cdb0 100%)",
        particleColor: "#d6cdb0",
        particleLinks: "#c7bd97",
        boxShadowColor: "214, 205, 176",
        lightColor: "#e8e1c6"
    },
    caramel: {
        name: "Caramel Iced Coffee",
        background: "linear-gradient(135deg, #cc9544 0%, #a3742d 100%)",
        particleColor: "#cc9544",
        particleLinks: "#a3742d",
        boxShadowColor: "204, 149, 68",
        lightColor: "#cc9544"
    },
    chocolate: {
        name: "Chocolate Mocha",
        background: "linear-gradient(135deg, #5a3925 0%, #3b2516 100%)",
        particleColor: "#8c6248",
        particleLinks: "#5a3925",
        boxShadowColor: "140, 98, 72",
        lightColor: "#8c6248"
    },
    strawberry: {
        name: "Strawberry Fun",
        background: "linear-gradient(135deg, #d8a7d8 0%, #b987b9 100%)",
        particleColor: "#d8a7d8",
        particleLinks: "#b987b9",
        boxShadowColor: "216, 167, 216",
        lightColor: "#d8a7d8"
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
    
    // Apply to all elements with box-shadow
    updateBoxShadows(theme.boxShadowColor);
    
    // If a page has particlesJS, but it hasn't been initialized yet, set up an observer
    if (!window.pJSDom || window.pJSDom.length === 0) {
        setupParticlesObserver(theme);
    }
}

// Update box shadows across the site
function updateBoxShadows(colorRGB) {
    // Update CSS variable if supported
    if (document.documentElement.style.setProperty) {
        document.documentElement.style.setProperty('--theme-box-shadow-color', colorRGB);
    }
    
    // Create and apply a style element with updated box-shadow values
    let styleEl = document.getElementById('theme-box-shadow-styles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-box-shadow-styles';
        document.head.appendChild(styleEl);
    }
    
    styleEl.textContent = `
        .icon-container:hover {
            box-shadow: 0 0 20px rgba(${colorRGB}, 0.8) !important;
        }
        .icon:hover {
            box-shadow: 0 0 20px rgba(${colorRGB}, 0.5) !important;
        }
        .rectangle:hover {
            box-shadow: 0 0 20px rgba(${colorRGB}, 0.7) !important;
        }
        .long-rectangle, .emergency-card, .tab-cloak-card {
            box-shadow: 0 0 15px rgba(${colorRGB}, 0.8) !important;
        }
        .theme-circle {
            box-shadow: 0 0 5px rgba(${colorRGB}, 0.7) !important;
        }
        .theme-circle:hover {
            box-shadow: 0 0 15px rgba(${colorRGB}, 1) !important;
        }
        .back-button, .nav-icon {
            box-shadow: 0 0 10px rgba(${colorRGB}, 0.5) !important;
        }
        .back-button:hover, .nav-icon:hover {
            box-shadow: 0 0 20px rgba(${colorRGB}, 0.8) !important;
        }
        .message-overlay .glowing-message {
            box-shadow: 0 0 20px rgba(${colorRGB}, 0.5) !important;
        }
        .message-close {
            box-shadow: 0 0 10px rgba(${colorRGB}, 0.7) !important;
        }
        .message-close:hover {
            box-shadow: 0 0 15px rgba(${colorRGB}, 1) !important;
        }
        .coolBlobIdk {
            box-shadow: 0 0 120px rgba(${colorRGB}, 0.5) !important;
        }
    `;
}

// Set up an observer to reinitialize particles when they're added to the DOM
function setupParticlesObserver(theme) {
    // Check if particlesJS is loaded
    if (typeof particlesJS === 'undefined') return;
    
    // Use MutationObserver to detect when particles container is added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const node = mutation.addedNodes[i];
                    if (node.id === 'particles-js') {
                        // Initialize particles with theme colors
                        particlesJS("particles-js", {
                            "particles": {
                                "number": { "value": 30, "density": { "enable": false } },
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
                                "move": { "enable": true, "speed": 4, "direction": "random" }
                            },
                            "interactivity": {
                                "events": { "onhover": { "enable": false } }
                            }
                        });
                        
                        observer.disconnect();
                        break;
                    }
                }
            }
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
