//class for storing game data
class Game {
    constructor(fullName, date, developer, shortDescription, description) {
        this.fullName = fullName;
        this.date = new Date(date);
        this.developer = developer;
        this.shortDescription = shortDescription;
        this.description = description;
    }
}

//counter for cards on games page
var counter = 0;

//function for adding cards with games info to games page
function createCards(value, key, map) {
    let params = new URLSearchParams(window.location.search)
    let start = params.get("start")
    let end = params.get("end");
    start ??= -8640000000000000; //if no start argument was given, start is min time
    end ??= 8640000000000000; // if no end argument was given, end is max time
    if (value.date < new Date(start) || value.date > new Date(end)) {
        return; //if game release date is not in range, don't add it
    }
    $('.card-deck').eq(Math.floor(counter / 3)).append(`
    <div class="card d-inline-flex">
        <img class="card-img-top" src="../img/${key}.jpg" alt="${key} cover" title="${key} cover">
        <div class="card-body">
            <h class="badge badge-secondary">${new Intl.DateTimeFormat().format(value.date)}</h>
            <h4 class="card-title">${value.fullName}</h5>
            <p class="card-text">${value.shortDescription}</p>
            <a class="btn btn-primary" href="./game.html?game=${key}">Go to game page</a>
        </div>
        <div class="card-footer">
            Developed by ${value.developer}
        </div>
    </div>
    `)
    counter++;
    if (!(counter % 3)) { //for each 3 cards create new card deck
        $('body > .container').append(`
        <br>
        <div class="card-deck">
        </div>
        `)
    }
}

//map, key is short game name, value is game info
var map = new Map(
    [
        ["Warcraft", new Game("Warcraft: Orcs & Humans", "1994-11-23", "Blizzard Entertainment", "Warcraft: Orcs & Humans is a real-time strategy game (RTS) developed and published by Blizzard Entertainment, and published by Interplay Productions in Europe. It was released for MS-DOS in North America on 15 November 1994, and for Mac OS in early 1996. The MS-DOS version was re-released by Sold-Out Software in 2002.", "Warcraft: Orcs & Humans is a real-time strategy game (RTS). The player takes the role of either the Human inhabitants of Azeroth, or the invading Orcs. In the single player campaign mode the player works through a series of missions, the objective of which varies, but usually involves building a small town, harvesting resources, building an army and then leading it to victory. In multiplayer games, the objective is always to destroy the enemy players' forces. Some scenarios are complicated by the presence of wild monsters, but sometimes these monsters can be used as troops. The game plays in a medieval setting with fantasy elements. Both sides have melee units and ranged units, and also spellcasters.Gameplay of Warcraft: Orcs & Humans expands the Dune II &laquo;build base, build army, destroy enemy&raquo; paradigm to include other modes of game play. These include several new mission types, such as conquering rebels of the player's race, rescuing and rebuilding besieged towns, rescuing friendly forces from an enemy camp and then destroying the main enemy base, and limited-forces missions, in which neither side can make further units, and making efficient use of one's platoon is a key strategy element. In one mission, the player has to kill the Orc chief's daughter.The game allows two players to compete in multiplayer contests by dialup modem or local networks, and enables gamers with the MS-DOS and Macintosh version to play each other. Multiplayer and AI skirmishes that are not part of campaigns were supported by a random map generator. The game also allowed spawn installations to be made.Economy and powerWarcraft requires players to collect resources, and to produce buildings and units in order to defeat an opponent in combat. Non-combatant builders deliver the resources to the Town Center from mines, from which gold is dug, and forests, where wood is chopped. As both are limited resources which become exhausted during the game, players must collect them efficiently, and also retain forests as defensive walls in the early game when combat forces are small.The lower-level buildings for Humans and Orcs have the same functions, but different sprites. The Town Hall stores resources and produces units that collect resources and construct buildings. Each Farm provides food for up to four units, and additional units cannot be produced until enough Farms are built. The Barracks produces all non-magical combat units, including melee, ranged, mounted, and siege units. However all except the most basic also need assistance from other buildings, some of which can also upgrade units.Each side can construct two types of magical buildings, each of which produces one type of spellcaster and researches more advanced spells for that type. These advanced buildings can be constructed only with assistance from other buildings. The Human Cleric and Orc Necrolyte can both defend themselves by magic and also see distant parts of the territory for short periods.The Cleric's other spells are protective, healing the injured and making troops invisible, while the Necrolyte raises skeletons as troops and can make other units temporarily invulnerable, at the cost of severely damaging them when the spell dissipates.The Human Conjurer and Orc Warlock have energy blasts, wider-range destruction spells and the ability to summon small, venomous monsters. The Conjurer can summon a water elemental, while the Warlock can summon a demonic melee unit.Orcs (red) attack a Human town and its defenders (blue). The flaming building is close to collapse, and the burnt ground to its left is the remains of a razed building. The numbers across the top are the player's reserves of lumber and gold. The unit marked with a light green box is currently selected, and its details appear in the lower-left panel. The upper-left panel is the mini-map, which shows all the territory fought over, mostly not yet discovered by the player, and enables the player to select a part of the territory to view.The main screen has three areas: the largest, to the right, is the part of the territory on which the player is currently operating; the top left is the minimap; and, if a building or unit(s) is selected, the bottom left shows their status and any upgrades and the actions that can be performed. The status details include a building's or unit's health, including its progress if being constructed, and any upgrades the object has completed. The Menu control, at the very bottom on the left, provides access to save game, load game and other menu functions.Initially most of the main map and minimap are blacked out, but the visible area expands as the player's units explore the map. The mini-map shows a summary of the whole territory, with green dots for the player's buildings and units and red dots for enemy ones. The player can click in the main map or the minimap to scroll the main map around the territory.All functions can be invoked by the mouse. Keys can also invoke the game setup, some of the menu options and some gameplay functions including scrolling and pausing the game. Players can select single units by clicking, and groups of up to four by shift-clicking or bandboxing. To move units, players can shift the mouse to select units on the main map, move to the unit menu to select an action, and then back to the main map or minimap to specify the target area; shortcut keys can eliminate the middle mouse action in this cycle.")],
        ["Starcraft", new Game("StarCraft", "1998-03-31", "Blizzard Entertainment", "StarCraft is a 1998 military science fiction real-time strategy game developed and published by Blizzard Entertainment for Microsoft Windows. The game spawned the StarCraft franchise, and became the first game of the video game series. A Classic Mac OS version was released in 1999, and a Nintendo 64 adaptation, co-developed with Mass Media, was released in 2000.", "Blizzard Entertainment's use of three distinct races in StarCraft is widely credited with revolutionizing the real-time strategy genre. All units are unique to their respective races, and while rough comparisons can be drawn between certain types of units in the technology tree, every unit performs differently and requires different tactics for a player to succeed.The psionic and technologically adept Protoss have access to powerful units and machinery and advanced technologies such as energy shields and localized warp capabilities, powered by their psionic traits. However, their forces have lengthy and expensive manufacturing processes, encouraging players to follow a strategy of the quality of their units over the quantity. The insectoid Zerg possess entirely organic units and structures, which can be produced quickly and at a far cheaper cost to resources, but are accordingly weaker, relying on sheer numbers and speed to overwhelm enemies. The humanoid Terrans provide a middle ground between the other two races, providing units that are versatile and flexible. They have access to a range of more ballistic military technologies and machinery, such as tanks and nuclear weapons.Although each race is unique in its composition, no race has an innate advantage over the other. Each species is balanced out so that while they have different strengths, powers, and abilities, their overall strength is the same. The balance stays complete via infrequent patches (game updates) provided by Blizzard.StarCraft features artificial intelligence that scales in difficulty, although the player cannot change the difficulty level in the single-player campaigns. Each campaign starts with enemy factions running easy AI modes, scaling through the course of the campaign to the hardest AI modes. In the level editor provided with the game, a designer has access to four levels of AI difficulties: easy, medium, hard, and insane, each setting differing in the units and technologies allowed to an AI faction and the extent of the AI's tactical and strategic planning. The single-player campaign consists of thirty missions, split into ten for each race.Each race relies on two resources to sustain their game economies and to build their forces: minerals and vespene gas. Minerals are needed for all units and structures, and they are obtained by using a worker unit to harvest the resource directly from mineral nodes scattered around the battlefield. Players require vespene gas to construct advanced units and buildings, and they acquire it by constructing a gas extraction building on top of a geyser and using worker units to extract the gas from it. In addition, players need to regulate the supplies for their forces to ensure that they can construct the number of units they need. Although the nature of the supply differs between the races—Terrans use physical supplies held in depots, Protoss use psionic energy channeled from their homeworld via pylons, and Zerg are regulated by the number of controlling overlord units present—the supply mechanic essentially works in exactly the same way for each race (just with differing impacts on gameplay), allowing players to create new units when there are sufficient resources to sustain them.Protoss and Zerg building construction is limited to specific locations: Protoss buildings need to be linked to a power grid, while almost every Zerg structure must be placed on a carpet of biomass, called creep, that is produced by certain structures. Terran buildings are far less limited, with certain primary base structures possessing the ability to take off and fly slowly to a new location. Terran buildings, however, require the worker unit to continue construction on the building until it is completed. Also, once a Terran building has taken a certain amount of damage, it will catch fire and can eventually burn to the ground without further enemy action if repairs are not performed by a worker unit. The Protoss, by contrast, only require a worker unit to begin the process of transporting a building to the theater of operations via warp, and their buildings' shields (but not their structure) are regenerative. The Zerg worker unit physically transforms into the structure created, which is capable of slowly healing itself.Multiplayer on StarCraft is powered through Blizzard Entertainment's Battle.net Internet service. Through this, a maximum of eight players can compete in a variety of game modes, including simply destroying all other players (which may be competitive, as in Ladder play, or non-ranked, as in melee play), to king of the hill and capture the flag objective-based games. In addition, the game incorporates a variety of specialized scenarios for different types of game, such as simulating a football game, using the Terran hoverbike unit to conduct a bike race, or hosting a Zerg hunting competition. StarCraft is also one of the few games that include a spawn installation, which allows for limited multiplayer. It must be installed from a disc, and requires a product key to work just as the full version does. However, one product key can support up to eight spawned installations with access to Battle.net. Limitations of a spawned installation include the inability to play single-player missions, create multiplayer games, or use the campaign editor. Newer releases of the game available through Battle.net or discs that include the Windows Vista label don't support the spawn installation.")],
        ["CnC", new Game("Command & Conquer", "1995-08-31", "Westwood Studios", "Command & Conquer (C&C) is a real-time strategy (RTS) video game franchise, first developed by Westwood Studios. The first game was one of the earliest of the RTS genre, itself based on Westwood Studios' influential strategy game Dune II and introducing trademarks followed in the rest of the series. This includes full-motion video cutscenes with an ensemble cast to progress the story, as opposed to digitally in-game rendered cutscenes.", "Command & Conquer involves players operating as one of two playable factions on a map - the Global Defense Initiative (GDI), and the Brotherhood of Nod - developing bases, gathering resources and using them to produce troops, and then defeating their opponents by eliminating their army and either destroying or capturing their base. Base production and unit training is funded by gathering Tiberium, the game's sole resource, through the use of harvesting units, and processing them into credits through a refinery structure. Each faction has its own unique types of units, its own superweapon, and its own combat strategy: GDI relies on superior firepower and armour at the expense of greater production costs and slower movement; while Nod relies on a combination of numerical superiority, superior speed, and unconventional tactics, generally at the expense of less firepower and poor durability.Producing units requires establishing a base through a special unit called a Mobile Construction Vehicle (MCV) - MCVs can only be deployed in open flat land, and structures must be placed within close proximity with each other. Bases can be protected with various defensive structures such as sandbags, gun turrets and concrete walls, and units are produced in production structures (i.e. Barracks for infantry, Factory for vehicles, Helipad for aircraft), with tech buildings helping to unlock more advanced units; construction options function on a tech tree, in that certain buildings must be constructed to unlock new options. Silos can be built to store more resources, as the refinery structures can only hold a finite amount, repair facilities can be built to repair damaged vehicles, and power plants are required to keep the base operational - low power slows down production, stops defensive weapons working, and causes buildings to slowly take damage over time until sufficient power is restored (either by constructing additional power plants, or selling off extra buildings to reduce total power requirements). In total, the game contains around fifty units and structures.Command & Conquer features two single-player campaigns, one for each faction, in which the player must undertake a series of missions across a campaign map for their chosen faction. The objective of most campaign missions is usually to destroy units, or destroy / take control of enemy buildings, with each mission beginning with a briefing conducted using a mix of computer animations and live-action full motion video (FMV). At times during the campaign, the player can choose which mission to undertake, which offer different scenarios to overcome.The original DOS release features multiplayer with up to four players, a rarity at the time, with internet-based multiplayer being made available in Command & Conquer Gold, which also features SVGA visuals. The game's Sega Saturn and PlayStation ports lack multiplayer support, though the latter was released with the inclusion of the fifteen single-player missions from The Covert Operations expansion pack. The Nintendo 64 version, while lacking multiplayer support as well, features updated graphics, with 3D models and environments, and four new &laquo;Special Ops&raquo; missions, though the FMV cutscenes were removed and replaced with static images, accompanied by voice acting and sound effects.")],
        ["SupCom", new Game("Supreme Commander", "2007-01-16", "Gas Powered Games", "Supreme Commander is a 2007 real-time strategy video game designed by Chris Taylor and developed by his company, Gas Powered Games. The game is considered to be a spiritual successor, not a direct sequel, to Taylor's 1997 game Total Annihilation, and also the Spring remake. First announced in the August 2005 edition of PC Gamer magazine, the game was released in Europe on February 16, 2007, and in North America on February 20.", "Supreme Commander, like its spiritual predecessors, Total Annihilation and Spring, begins with the player solely possessing a single, irreplaceable construction unit called the Armored Command Unit, or ACU, the titular Supreme Commander. Normally the loss of this unit results in the loss of the game (Skirmish missions can be set for a variety of victory conditions). These mech suits are designed to be transported through quantum gateways across the galaxy and contain all the materials and blueprints necessary to create a 37th-century army from a planet's native resources in hours. All standard units except Commanders and summoned Support Commanders (sACU) are self-sufficient robots.All units and structures belong to one of four technology tiers, or Tech levels, each tier being stronger and/or more efficient than the previous. Certain lower-tier structures can be upgraded into higher ones without having to rebuild them. The first tier is available at the start of the game and consists of small, relatively weak units and structures. The second tier expands the player's abilities greatly, especially in terms of stationary weapons and shielding, and introduces upgraded versions of tier one units. The third tier level has very powerful assault units designed to overcome the fortifications of the most entrenched player. The fourth tier is a limited range of experimental technology. These are usually massive units which take a lot of time and energy to produce, but provide a significant tactical advantage.Supreme Commander features a varied skirmish AI. The typical Easy' and Normal modes are present, but the Hard difficulty level has four possible variants. Horde AI will swarm the player with hordes of lower level units, Tech AI will upgrade its units as fast as possible and assault the player with advanced units, the Balanced AI attempts to find a balance between the two, and the Supreme AI decides which of the three hard strategies is best for the map.The single player campaign consists of eighteen missions, six for each faction. The player is an inexperienced Commander who plays a key role in their faction's campaign to bring the Infinite War to an end. Despite the low number of campaign missions, each mission can potentially last hours. At the start of a mission, objectives are assigned for the player to complete. Once the player accomplishes them, the map is expanded, sometimes doubling or tripling in size, and new objectives are assigned. As the mission is commonly divided into three segments, the player will often have to overcome several enemy positions to achieve victory.Resource managementBecause humans have discovered replication technology, making advanced use of rapid prototyping and nanotechnology, only two types of resources are required to wage war: Energy and Mass. Energy is obtained by constructing power generators on any solid surface, while Mass is obtained either by placing mass extractors on limited mass deposit spots or by building mass fabricators to convert energy into mass. Constructor units can gather energy by reclaiming it from organic debris such as trees and mass from rocks and wrecked units. Each player has a certain amount of resource storage, which can be expanded by the construction of storage structures. This gives the player reserves in times of shortage or allows them to stockpile resources. If the resource generation exceeds the player's capacity, the material is wasted.An adjacency system allows certain structures to benefit from being built directly adjacent to others. Energy-consuming structures will use less energy when built adjacent to power generators and power generators will produce more energy when built adjacent to power storage structures. The same applies to their mass-producing equivalents. Likewise, factories will consume less energy and mass when built adjacent to power generators and mass fabricators/extractors, respectively. However, by placing structures in close proximity, they become more vulnerable to collateral damage if an adjacent structure is destroyed. Furthermore, most resource generation structures can cause chain reactions when destroyed (especially Tier III structures, which produce large amounts of resources but often have large detonations that can wipe out a nearby army).")],
        ["AoE", new Game("Age of Empires", "1997-10-26", "Ensemble Studios", "Age of Empires is a real-time strategy video game based on history, developed by Ensemble Studios and published by Microsoft, and the first game in the Age of Empires series. The game uses the Genie Engine, a 2D sprite-based game engine. The game allows the user to act as the leader of an ancient civilization by advancing it through four ages (the Stone, Tool, Bronze, and Iron Ages), gaining access to new and improved units with each advance.", "Age of Empires requires the player to develop a civilization from a handful of hunter-gatherers to an expansive Iron Age Empire. To assure victory, the player must gather resources in order to pay for new units, buildings and more advanced technology. Resources must be preserved, as no new resources become available as the game progresses; for example, trees that are cut down will not grow back.Twelve civilizations are available, each with individual sets of attributes, including a varying number of available technologies and units. Each civilization has technologies unique to them, so that no civilization possesses all the technologies possible within the game.A major component of the game is the advancement through four ages. These are the Stone Age (Mesolithic/Nomad/Paleolithic), the Tool Age (Neolithic/Chalcolithic), the Bronze Age and the Iron Age. Advancement between ages is researched at the Town Center, and each advancement brings the player new technologies, weapons, and units.The game features four single-player campaigns in which the player is required to complete specific objectives. Campaigns are a collection of scenarios which are completed in a linear fashion. The campaigns follow the history of the Egyptian, Greek, Babylonian and Yamato civilizations; there is also a complete campaign specially made for the demo version that takes place in the Hittite Empire. Aside from the campaigns, there is a game mode called random map, in which a different map is generated for each new game. Variations of random map, such as the resource-heavy death match, are also available.Age of Empires facilitated online and network play with up to 8 people simultaneously. Because the network play is less sophisticated than that of modern games, lag and disconnections often occur. Until June 19, 2006, multiplayer gameplay was supported by Microsoft Gaming Zone. At that point, the Zone abandoned support of most CD-ROM games, including Age of Empires and Age of Empires II: The Age of Kings.The creation of user-made scenarios or series of scenarios (campaigns) for the game was made possible using the Scenario Builder. This tool is simpler and easier to learn than comparable editors used in more modern games, but it has fewer capabilities as a result. Ensemble Studios used the Scenario Builder to make the single-player campaigns which shipped with the retail game. Various unofficial sites exist where custom scenarios can be submitted and downloaded. In late 2005, it was discovered that by modifying various data files, units present in the beta versions of the game could be made available in the editor. Some obscure units include a spaceship and a hero that changes ownership when units move near it. Through data editing, the rules of unit placement can also be modified. This allows units to be placed on any terrain and on top of other units, which creates new possibilities for design. Other significant discoveries include new terrain templates, a mode to triple each unit's hitpoints and a tool to edit map sizes.")]
    ]
);

//function that will run only when DOM is ready
$(function () {
    //add menu to page
    $('#menu').prepend(`
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
            <div class="container">
                <a class="navbar-brand" title="RTS Encyclopedia">RTS Encyclopedia</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="./index.html" title="Home page">Home</a>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <a class="nav-link text-dark dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">Games</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <h6 class="dropdown-header">Most popular games</h6>
                                    <a class="dropdown-item" href="./game.html?game=SupCom" title="SupCom">SupCom</a>
                                    <a class="dropdown-item" href="./game.html?game=Starcraft" title="Starcraft">Starcraft</a>
                                    <a class="dropdown-item" href="./game.html?game=Warcraft" title="Warcraft">Warcraft</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="./games.html" title="Games list">All games</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `);
    //if games page, add filter buttons and form, create cards
    if (document.location.pathname.indexOf("/games.html") != -1) {
        $('header nav.navbar .container').append(`
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Filter Games
        </button>
        <a style="margin-left: 2px;" type="button" class="btn btn-danger" href="?">
            Clear Filters
        </a>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Filter Games</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form method="get">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Release date range</label>
                                <input name="start" class="form-control" type="date" /><br />
                                <input name="end" class="form-control" type="date" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="submit" class="btn btn-primary" value="Filter"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `);
        map.forEach(createCards);
        //mark dropdown item for current page as active
        $(".dropdown-item:contains('All games')").addClass("active");
    }
    //if game page
    if (document.location.pathname.indexOf('/game.html') != -1) {
        //get key
        let gameKey = new URLSearchParams(window.location.search).get('game');
        //change page title
        document.title = gameKey;
        let game = map.get(gameKey);
        //mark dropdown item for current page as active
        $(`.dropdown-item:contains(${document.title})`).addClass("active");
        //add game info ro page
        $(".container.mt-3").append(`
        <img src="../img/${gameKey}.jpg" class="w-100" alt="${gameKey} cover" title="${gameKey} cover">
        <div class="jumbotron p-3">
            <h1 class="text-center">${game.fullName}</h1>
            <p>
            ${game.description}
            </p>
            <h1 class="text-center font-weight-light">Screenshots:</h1>
            <div id="carouselSC" class="m-auto carousel slide w-75" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselSC" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselSC" data-slide-to="1"></li>
                    <li data-target="#carouselSC" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../img/${gameKey}Screenshot1.jpg" class="d-block w-100" alt="${gameKey} screenshot 1" title="${gameKey} screenshot 1">
                    </div>
                    <div class="carousel-item">
                        <img src="../img/${gameKey}Screenshot2.jpg" class="d-block w-100" alt="${gameKey} screenshot 2" title="${gameKey} screenshot 2">
                    </div>
                    <div class="carousel-item">
                        <img src="../img/${gameKey}Screenshot3.jpg" class="d-block w-100" alt="${gameKey} screenshot 3" title="${gameKey} screenshot 3">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselSC" role="button" data-slide="prev" title="previous image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselSC" role="button" data-slide="next" title="next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        `);
    }
});
