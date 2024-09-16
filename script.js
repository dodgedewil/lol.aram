// Список персонажів
const characters = [
    'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 
    'Ashe', 'Aurelion Sol', 'Aurora', 'Azir', 'Bard', 'Bel\'Veth', 'Blitzcrank', 'Brand', 'Braum', 
    'Briar', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 
    'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 
    'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 
    'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai\'Sa', 
    'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix', 
    'Kindred', 'Kled', 'Kog\'Maw', 'K\'Sante', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 
    'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Milio', 'Miss Fortune', 
    'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 
    'Nocturne', 'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 
    'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven', 
    'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 
    'Singed', 'Sion', 'Sivir', 'Skarner', 'Smolder', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 
    'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 
    'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vex', 'Vi', 
    'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 
    'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'
];

// Список предметів
const items = [
    'Abyssal Mask', 'Archangel\'s Staff', 'Ardent Censer', 'Axiom Arc', 'Banshee\'s Veil', 'Black Cleaver', 
    'Blackfire Torch', 'Blade of the Ruined King', 'Bloodthirster', 'Chempunk Chainsword', 'Cosmic Drive', 
    'Cryptbloom', 'Dawncore', 'Dead Man\'s Plate', 'Death\'s Dance', 'Echoes of Helia', 'Eclipse', 'Edge of Night',
    'Essence Reaver', 'Experimental Hexplate', 'Force of Nature', 'Frozen Heart', 'Guinsoo\'s Rageblade', 
    'Heartsteel', 'Hextech Rocketbelt', 'Hollow Radiance', 'Horizon Focus', 'Hubris', 'Hullbreaker', 
    'Iceborn Gauntlet', 'Immortal Shieldbow', 'Imperial Mandate', 'Infinity Edge', 'Jak\'Sho, The Protean', 
    'Kaenic Rookern', 'Knight\'s Vow', 'Kraken Slayer', 'Liandry\'s Torment', 'Lich Bane', 'Locket of the Iron Solari', 
    'Lord Dominik\'s Regards', 'Luden\'s Companion', 'Malignance', 'Manamune', 'Maw of Malmortius', 'Mercurial Scimitar', 
    'Mikael\'s Blessing', 'Moonstone Renewer', 'Morellonomicon', 'Mortal Reminder', 'Nashor\'s Tooth', 'Navori Flickerblade', 
    'Opportunity', 'Overlord\'s Bloodmail', 'Phantom Dancer', 'Profane Hydra','Rabadon\'s Deathcap', 'Randuin\'s Omen', 
    'Rapid Firecannon', 'Ravenous Hydra', 'Redemption', 'Riftmaker', 'Rod of Ages', 'Runaan\'s Hurricane',
    'Rylai\'s Crystal Scepter', 'Serpent\'s Fang', 'Serylda\'s Grudge', 'Shadowflame', 'Shurelya\'s Battlesong', 
    'Spear of Shojin', 'Spirit Visage', 'Staff of Flowing Water', 'Statikk Shiv', 'Sterak\'s Gage', 'Stormsurge', 
    'Stridebreaker', 'Sundered Sky', 'Sunfire Aegis', 'Terminus', 'The Collector', 'Thornmail', 'Titanic Hydra', 
    'Trinity Force', 'Umbral Glaive', 'Unending Despair', 'Void Staff', 'Voltaic Cyclosword', 'Warmog\'s Armor',
    'Winter\'s Approach', 'Wit\'s End', 'Youmuu\'s Ghostblade', 'Yun Tal Wildarrows', 'Zeke\'s Convergence', 'Zhonya\'s Hourglass'
];

// Функція для рандомного вибору елемента зі списку
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Функція генерації персонажа та предметів
function generateCharacterAndItems() {
    const character = getRandomElement(characters);
    const randomItems = [];
    
    // Отримуємо 6 випадкових предметів
    while (randomItems.length < 6) {
        const item = getRandomElement(items);
        if (!randomItems.includes(item)) {
            randomItems.push(item);
        }
    }

    // Виводимо персонажа та предмети на екран
    document.getElementById('character').innerText = `Character: ${character}`;
    const itemsList = document.getElementById('items');
    itemsList.innerHTML = '';
    randomItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemsList.appendChild(li);
    });
}

// Додаємо слухач події для кнопки
document.getElementById('generate').addEventListener('click', generateCharacterAndItems);
