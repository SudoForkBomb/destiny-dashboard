import { Injectable } from '@angular/core';
import { HttpRequestType, HttpService } from 'app/shared/services/http.service';
import { SharedApp } from 'app/shared/services/shared-app.service';

import { DestinyMembership, IAccountStats } from '../../interface.barrel'
import { GroupTypes } from '../../enums.interface';

/** This Injectable manages the data layer for Destiny Accounts.*/
@Injectable()
export class AccountStatsService {
    private cacheTimeMs: number = 60000;

    constructor(private http: HttpService, private sharedApp: SharedApp) { }

    getAccountStats(membership: DestinyMembership, groups: Array<GroupTypes>): Promise<IAccountStats> {
        let requestUrl = "https://www.bungie.net/Platform/Destiny2/" + membership.membershipType + "/Account/" + membership.membershipId +
            "/Stats/?groups=" + groups.join();

        //Get the response, or return the cached result
        return this.http.getWithCache(requestUrl, HttpRequestType.BUNGIE_BASIC, this.cacheTimeMs).catch((error) => {
            this.sharedApp.showError("There was an error getting account stats! Please try again.", error);
        });
    }
}