import { ICard, IUserDashboard } from './card.interface';

export interface ICardDefinition {
    id: number;  //Unique ID of the card
    title: string;  //Title of the card
    description: string;  //Short description of the card
    rating: number;  //Rating generated by the community
    route: string; //Fullscreen internal route, or external href
    isExternalRoute: boolean; //Is the route internal or external
    lastUpdated: number; //epoch time (Ex new Date().getTime()) when the card was last updated
    layouts: Array<{ rows: number, cols: number }>; //Supported layouts (1x1, 2x1, 3x3, etc) Max Columns is 3
    requiresLogin: boolean; //User must be logged in to Bungie API in order to use this card
    previewImageClass: string; //Image for preview, used in AddCardComponent
}

export class CardDefinitions {
    static definitions: Array<ICardDefinition> =
    [{
        id: 0,
        title: "Countdown",
        description: "Destiny 2 countdown",
        rating: 5,
        route: "/countdown",
        //Sort layouts by column, then row
        layouts: [
            { rows: 1, cols: 1 },
            { rows: 1, cols: 2 }, { rows: 2, cols: 2 },
            { rows: 1, cols: 3 }, { rows: 2, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: false,
        lastUpdated: 1497057903904,
        previewImageClass: "dd-countdown-preview"
    },
    {
        id: 1,
        title: "Stats",
        description: "A summary of your characters",
        rating: 5,
        route: "/stats",
        layouts: [
            { rows: 2, cols: 2 },
            { rows: 2, cols: 3 },
            { rows: 3, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: false,
        lastUpdated: 1497057974086,
        previewImageClass: "dd-stats-preview"
    },
    {
        id: 2,
        title: "Reddit",
        description: "A preview of what's happening on /r/DestinyTheGame",
        rating: 5,
        route: "https://www.reddit.com/r/destinythegame/",
        layouts: [
            { rows: 2, cols: 1 },
            { rows: 2, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: true,
        lastUpdated: 1497057959790,
        previewImageClass: "dd-reddit-preview"
    },
    {
        id: 3,
        title: "Public Events",
        description: "Public Event Timers from DestinyPublicEvents.com",
        rating: 5,
        route: "/public-events",
        layouts: [
            { rows: 2, cols: 2 }, { rows: 3, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: false,
        lastUpdated: 1497057959790,
        previewImageClass: "dd-public-events-preview"
    },
    {
        id: 4,
        title: "Twitch",
        description: "Popular Destiny Twitch streams",
        rating: 5,
        route: "https://www.twitch.tv/directory/game/Destiny",
        layouts: [
            { rows: 2, cols: 1 }, { rows: 3, cols: 1 },
            { rows: 2, cols: 2 }, { rows: 3, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: true,
        lastUpdated: 1497058159790,
        previewImageClass: "dd-twitch-preview"
    },
    {
        id: 5,
        title: "Bungie News",
        description: "The latest news from Bungie.net",
        rating: 5,
        route: "https://www.bungie.net/en/News",
        layouts: [
            { rows: 2, cols: 2 }, { rows: 3, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }, { rows: 4, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: true,
        lastUpdated: 1501718581327,
        previewImageClass: "dd-bungie-news-preview"
    },
    {
        id: 6,
        title: "Inventory",
        description: "Manage your vault and inventories.",
        rating: 5,
        route: "inventory",
        layouts: [
            { rows: 2, cols: 2 }, { rows: 3, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }, { rows: 4, cols: 3 }
        ],
        requiresLogin: true,
        isExternalRoute: false,
        lastUpdated: 1502124275046,
        previewImageClass: "dd-inventory-preview"
    },
    {
        id: 7,
        title: "Clan Leaderboards",
        description: "View clan leaderboards",
        rating: 5,
        route: "clan-leaderboards",
        layouts: [
            { rows: 2, cols: 2 }, { rows: 3, cols: 2 },
            { rows: 2, cols: 3 }, { rows: 3, cols: 3 }
        ],
        requiresLogin: false,
        isExternalRoute: false,
        lastUpdated: 1503092830522,
        previewImageClass: "dd-clan-leaderboards-preview"
    }];

    static defaultDashboards: Array<IUserDashboard> = [{
        id: -1, name: "Default Dashboard", cards: [
            { id: -1, sequence: 1, definitionId: 1, layoutId: 1, definition: CardDefinitions.definitions[1], layout: CardDefinitions.definitions[1].layouts[1] },
            { id: -2, sequence: 2, definitionId: 4, layoutId: 2, definition: CardDefinitions.definitions[4], layout: CardDefinitions.definitions[4].layouts[2] },
            { id: -4, sequence: 3, definitionId: 0, layoutId: 0, definition: CardDefinitions.definitions[0], layout: CardDefinitions.definitions[0].layouts[0] },
            { id: -3, sequence: 4, definitionId: 2, layoutId: 1, definition: CardDefinitions.definitions[2], layout: CardDefinitions.definitions[2].layouts[1] },
            { id: -5, sequence: 5, definitionId: 5, layoutId: 0, definition: CardDefinitions.definitions[5], layout: CardDefinitions.definitions[5].layouts[0] }
        ]
    }, {
        id: -2, name: "News", cards: [
            { id: -1, sequence: 0, definitionId: 5, layoutId: 3, definition: CardDefinitions.definitions[5], layout: CardDefinitions.definitions[5].layouts[3] },
            { id: -2, sequence: 1, definitionId: 4, layoutId: 1, definition: CardDefinitions.definitions[4], layout: CardDefinitions.definitions[4].layouts[1] },
            { id: -3, sequence: 2, definitionId: 2, layoutId: 1, definition: CardDefinitions.definitions[2], layout: CardDefinitions.definitions[2].layouts[1] }
        ]
    }, {
        id: -3, name: "Stats", cards: [
            { id: -1, sequence: 1, definitionId: 1, layoutId: 1, definition: CardDefinitions.definitions[1], layout: CardDefinitions.definitions[1].layouts[1] },
            { id: -2, sequence: 2, definitionId: 7, layoutId: 1, definition: CardDefinitions.definitions[7], layout: CardDefinitions.definitions[7].layouts[1] }
        ]
    }];

    static initDashboardsFromAPI(userDashboards: Array<IUserDashboard>) {
        for (let i = 0; i < userDashboards.length; i++) {
            let userDashboard = userDashboards[i];
            //Validate user cards
            for (let j = 0; j < userDashboard.cards.length; j++) {
                let dashboardCard: ICard = userDashboard.cards[j];

                //Set a unique value for each card so we can reference it in the future
                dashboardCard.id = j;

                //Verify the card's definition still exists and assign it
                dashboardCard.definition = CardDefinitions.definitions[dashboardCard.definitionId];
                if (dashboardCard.definition == null) {
                    //If the card definition can't be found, remove this card
                    userDashboard.cards.splice(j, 1);
                    j--;
                    continue;
                }

                //Verify the card layout is still supported
                if (dashboardCard.layoutId >= dashboardCard.definition.layouts.length)
                    dashboardCard.layoutId = 0;

                dashboardCard.layout = dashboardCard.definition.layouts[dashboardCard.layoutId];
            }
        }

        return userDashboards;
    }
}