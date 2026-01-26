// scripts/normalize-order.js
const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
if (!folder) {
    console.error('Usage: node scripts/normalize-order.js <folder>');
    process.exit(1);
}

function parseOrder(name) {
    return name.split('.').map(Number);
}

function getSortedFilenames(files) {
    return files
        .filter(f => /^\d+(\.\d+)*\.json$/.test(f))
        .sort((a, b) => {
            const aParts = parseOrder(a.replace('.json', ''));
            const bParts = parseOrder(b.replace('.json', ''));
            for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
                const diff = (aParts[i] || 0) - (bParts[i] || 0);
                if (diff !== 0) return diff;
            }
            return 0;
        });
}

function* generateOrder(count, depth = 3) {
    let major = 1;
    let minor = 1;
    let patch = 1;
    for (let i = 0; i < count; i++) {
        yield `${major}.${minor}.${patch}`;
        patch++;
        if (patch > 2) {
            patch = 1;
            minor++;
            if (minor > 2) {
                minor = 1;
                major++;
            }
        }
    }
}

function updateJsonId(filePath, newId) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.id = newId;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const files = fs.readdirSync(folder);
const sorted = getSortedFilenames(files);
const orderGen = generateOrder(sorted.length);

sorted.forEach((oldName) => {
    const newId = orderGen.next().value;
    const newName = `${newId}.json`;
    const oldPath = path.join(folder, oldName);
    const newPath = path.join(folder, newName);

    if (oldName !== newName) {
        fs.renameSync(oldPath, newPath);
    }
    updateJsonId(newPath, newId);
});

console.log('Order normalized and ids updated.');
