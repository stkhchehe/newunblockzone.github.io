/**
 * Test File Access Script
 * Checks if all files are accessible in their new locations
 */

const fs = require('fs');
const path = require('path');

// Files to check
const filesToCheck = [
    // Data files
    'data/data-games.js',
    'data/data-apps.js',
    'data/data-movies.js',
    
    // Template files
    'templates/game.html',
    'templates/app.html',
    'templates/game-player.html',
    'templates/app-player.html',
    
    // Content management scripts
    'scripts/content-management/add-new-game.js',
    'scripts/content-management/add-new-app.js',
    
    // Utility scripts
    'scripts/utilities/tab-cloak.js',
    'scripts/utilities/shared.js',
    
    // Update scripts
    'scripts/update-scripts/a-update.js',
    'scripts/update-scripts/g-update.js',
    'scripts/update-scripts/fix-home-links.js',
    'scripts/update-scripts/fix-special-games.js',
    'scripts/update-scripts/update-file-paths.js',
    'scripts/update-scripts/remove-old-files.js'
];

// Function to check if a file exists
function fileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch (error) {
        console.error(`Error checking if file exists: ${filePath}`, error);
        return false;
    }
}

// Function to check all files
function checkAllFiles() {
    console.log('Checking if all files are accessible...\n');
    
    let allFilesExist = true;
    let existingFiles = 0;
    let missingFiles = [];
    
    for (const file of filesToCheck) {
        const exists = fileExists(file);
        
        if (exists) {
            console.log(`✅ File exists: ${file}`);
            existingFiles++;
        } else {
            console.log(`❌ File NOT found: ${file}`);
            missingFiles.push(file);
            allFilesExist = false;
        }
    }
    
    console.log(`\nCheck summary:`);
    console.log(`- Total files checked: ${filesToCheck.length}`);
    console.log(`- Files found: ${existingFiles}`);
    console.log(`- Files missing: ${missingFiles.length}`);
    
    if (missingFiles.length > 0) {
        console.log(`\nMissing files:`);
        missingFiles.forEach(file => console.log(`- ${file}`));
    }
    
    if (allFilesExist) {
        console.log('\n✨ SUCCESS: All files are accessible in their new locations!');
        return true;
    } else {
        console.log('\n❌ ERROR: Some files are missing. The reorganization is incomplete.');
        return false;
    }
}

// Run the check
checkAllFiles(); 