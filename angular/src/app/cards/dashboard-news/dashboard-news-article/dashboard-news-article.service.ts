import { Injectable } from '@angular/core';

import { NewsArticle } from './dashboard-news-article.interface';
import { ArticleCategory } from './dashboard-news-article.enum';

@Injectable()
export class NewsArticleService {
  getNewsArticles(): Promise<NewsArticle[]> {
    return Promise.resolve(ARTICLES);
  }
}

let redditLink = "<a style='color: #2196F3' target='_blank' href='https://www.reddit.com/r/DestinyDashboard/'>Reddit</a>";
let githubLink = "<a style='color: #2196F3' target='_blank' href='https://github.com/lax20attack/destiny-dashboard/'>GitHub</a>";

export const ARTICLES: NewsArticle[] = [
  {
    id: 3,
    title: "v1.0.4 release",
    category: ArticleCategory.NewCard,
    bodyPreview: "Destiny 2 Updates",
    body: "The dashboard has been converted to Destiny 2. Bungie API outages are preventing things from working properly at the moment.",
    date: new Date("Sept 5, 2017 6:00 pm")
  },
  {
    id: 2,
    title: "v1.0.0 release",
    category: ArticleCategory.NewCard,
    bodyPreview: "It's here! Finally!",
    body: "On the eve of Destiny 2, Destiny Dashboard is released! Please report any issues, feedback, or feature requests to " + githubLink + " or " + redditLink + ".",
    date: new Date("Sept 4, 2017 6:00 pm")
  },
  {
    id: 1,
    title: "Inventory Manager",
    category: ArticleCategory.CardUpdate,
    bodyPreview: "Inventory Manager released!",
    body: "Inventory Manager is done! Multiple item transfer, Loadouts, Filtering, and Quick search have been added.",
    date: new Date("Sept 1, 2017 6:00 pm")
  },
  {
    id: 0,
    title: "Beta Released",
    category: ArticleCategory.SiteNews,
    bodyPreview: "Destiny Dashboard is now in Beta!",
    body: "Destiny Dashboard is now in Beta! Please report any issues, feedback, or feature requests to " + githubLink + " or " + redditLink + ".",
    date: new Date("Aug 30, 2017 6:00 pm")
  }
];


