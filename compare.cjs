const fs = require('fs');

const liveContent = fs.readFileSync('live.js', 'utf8');
const localContent = fs.readFileSync('src/App.tsx', 'utf8');

const extractStrings = (text) => {
    const regex = /"([^"]{10,200})"/g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        if (!match[1].includes('http') && !match[1].match(/^[a-z0-9\- ]+$/)) {
            matches.push(match[1]);
        }
    }
    return matches;
};

const liveStrings = extractStrings(liveContent);
const localStrings = extractStrings(localContent);

// Also look for jsx strings children like >text<
const extractChildren = (text) => {
    const regex = />([^<]{10,200})</g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        if (match[1].trim().length > 10) {
            matches.push(match[1].trim());
        }
    }
    return matches;
};

const localChildren = extractChildren(localContent);
const allLocal = new Set([...localStrings, ...localChildren]);

console.log("Strings in live.js but not in local App.tsx:");
liveStrings.forEach(s => {
    if (![...allLocal].some(l => l.includes(s) || s.includes(l))) {
        console.log("- " + s);
    }
});
