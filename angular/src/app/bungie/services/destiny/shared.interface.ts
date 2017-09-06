
export interface Basic {
    displayValue: string;
    value: number;
}

export interface Currency {
    itemHash: any;
    value: number;
}

export interface Progression {
    dailyProgress: number;
    weeklyProgress: number;
    currentProgress: number;
    level: number;
    step: number;
    progressToNextLevel: number;
    nextLevelAt: number;
    progressionHash: number;
}

export interface PvEStats {
    abilityKills: Stat2;
    activitiesCleared: Stat1;
    activitiesEntered: Stat1;
    allParticipantsCount: Stat1;
    allParticipantsTimePlayed: Stat1;
    assists: Stat2;
    averageDeathDistance: Stat1;
    averageKillDistance: Stat1;
    averageLifespan: Stat1;
    bestSingleGameKills: Stat1;
    courtOfOryxAttempts: Stat1;
    courtOfOryxCompletions: Stat1;
    courtOfOryxWinsTier1: Stat1;
    courtOfOryxWinsTier2: Stat1;
    courtOfOryxWinsTier3: Stat1;
    deaths: Stat2;
    fastestCompletion: Stat1;
    highestCharacterLevel: Stat1;
    highestLightLevel: Stat1;
    kills: Stat2;
    killsDeathsAssists: Stat1;
    killsDeathsRatio: Stat1;
    longestKillDistance: Stat1;
    longestKillSpree: Stat1;
    longestSingleLife: Stat1;
    mostPrecisionKills: Stat1;
    objectivesCompleted: Stat2;
    orbsDropped: Stat2;
    orbsGathered: Stat2;
    precisionKills: Stat2;
    publicEventsCompleted: Stat2;
    publicEventsJoined: Stat2;
    remainingTimeAfterQuitSeconds: Stat2;
    resurrectionsPerformed: Stat2;
    resurrectionsReceived: Stat2;
    secondsPlayed: Stat2;
    suicides: Stat2;
    totalActivityDurationSeconds: Stat2;
    totalDeathDistance: Stat1;
    totalKillDistance: Stat1;
    weaponBestType: Stat1;
    weaponKillsAutoRifle: Stat2;
    weaponKillsFusionRifle: Stat2;
    weaponKillsGrenade: Stat2;
    weaponKillsHandCannon: Stat2;
    weaponKillsMachinegun: Stat2;
    weaponKillsMelee: Stat2;
    weaponKillsPrecisionKillsAutoRifle: Stat1;
    weaponKillsPrecisionKillsFusionRifle: Stat1;
    weaponKillsPrecisionKillsGrenade: Stat1;
    weaponKillsPrecisionKillsHandCannon: Stat1;
    weaponKillsPrecisionKillsMachinegun: Stat1;
    weaponKillsPrecisionKillsMelee: Stat1;
    weaponKillsPrecisionKillsPulseRifle: Stat1;
    weaponKillsPrecisionKillsRelic: Stat1;
    weaponKillsPrecisionKillsRocketLauncher: Stat1;
    weaponKillsPrecisionKillsScoutRifle: Stat1;
    weaponKillsPrecisionKillsShotgun: Stat1;
    weaponKillsPrecisionKillsSideArm: Stat1;
    weaponKillsPrecisionKillsSniper: Stat1;
    weaponKillsPrecisionKillsSubmachinegun: Stat1;
    weaponKillsPrecisionKillsSuper: Stat1;
    weaponKillsPulseRifle: Stat2;
    weaponKillsRelic: Stat2;
    weaponKillsRocketLauncher: Stat2;
    weaponKillsScoutRifle: Stat2;
    weaponKillsShotgun: Stat2;
    weaponKillsSideArm: Stat2;
    weaponKillsSniper: Stat2;
    weaponKillsSubmachinegun: Stat2;
    weaponKillsSuper: Stat2;
    weaponKillsSword: Stat2;
    weaponPrecisionKillsAutoRifle: Stat2;
    weaponPrecisionKillsFusionRifle: Stat2;
    weaponPrecisionKillsGrenade: Stat2;
    weaponPrecisionKillsHandCannon: Stat2;
    weaponPrecisionKillsMachinegun: Stat2;
    weaponPrecisionKillsMelee: Stat2;
    weaponPrecisionKillsPulseRifle: Stat2;
    weaponPrecisionKillsRelic: Stat2;
    weaponPrecisionKillsRocketLauncher: Stat2;
    weaponPrecisionKillsScoutRifle: Stat2;
    weaponPrecisionKillsShotgun: Stat2;
    weaponPrecisionKillsSideArm: Stat2;
    weaponPrecisionKillsSniper: Stat2;
    weaponPrecisionKillsSubmachinegun: Stat2;
    weaponPrecisionKillsSuper: Stat2;
}

export interface PvPStats {
    abilityKills: Stat2;
    activitiesEntered: Stat1;
    activitiesWon: Stat1;
    allParticipantsCount: Stat1;
    allParticipantsScore: Stat1;
    allParticipantsTimePlayed: Stat1;
    assists: Stat2;
    averageDeathDistance: Stat1;
    averageKillDistance: Stat1;
    averageLifespan: Stat1;
    averageScorePerKill: Stat1;
    averageScorePerLife: Stat1;
    bestSingleGameKills: Stat1;
    bestSingleGameScore: Stat1;
    closeCalls: Stat2;
    combatRating: Stat1;
    deaths: Stat2;
    defensiveKills: Stat1;
    dominationKills: Stat2;
    highestCharacterLevel: Stat1;
    highestLightLevel: Stat1;
    kills: Stat2;
    killsDeathsAssists: Stat1;
    killsDeathsRatio: Stat1;
    longestKillDistance: Stat1;
    longestKillSpree: Stat1;
    longestSingleLife: Stat1;
    mostPrecisionKills: Stat1;
    objectivesCompleted: Stat2;
    offensiveKills: Stat2;
    orbsDropped: Stat2;
    orbsGathered: Stat2;
    precisionKills: Stat2;
    relicsCaptured: Stat2;
    remainingTimeAfterQuitSeconds: Stat2;
    resurrectionsPerformed: Stat2;
    resurrectionsReceived: Stat2;
    score: Stat2;
    secondsPlayed: Stat2;
    suicides: Stat2;
    teamScore: Stat2;
    totalActivityDurationSeconds: Stat2;
    totalDeathDistance: Stat1;
    totalKillDistance: Stat1;
    weaponBestType: Stat1;
    weaponKillsAutoRifle: Stat2;
    weaponKillsFusionRifle: Stat2;
    weaponKillsGrenade: Stat2;
    weaponKillsHandCannon: Stat2;
    weaponKillsMachinegun: Stat2;
    weaponKillsMelee: Stat2;
    weaponKillsPrecisionKillsAutoRifle: Stat1;
    weaponKillsPrecisionKillsFusionRifle: Stat1;
    weaponKillsPrecisionKillsGrenade: Stat1;
    weaponKillsPrecisionKillsHandCannon: Stat1;
    weaponKillsPrecisionKillsMachinegun: Stat1;
    weaponKillsPrecisionKillsMelee: Stat1;
    weaponKillsPrecisionKillsPulseRifle: Stat1;
    weaponKillsPrecisionKillsRelic: Stat1;
    weaponKillsPrecisionKillsRocketLauncher: Stat1;
    weaponKillsPrecisionKillsScoutRifle: Stat1;
    weaponKillsPrecisionKillsShotgun: Stat1;
    weaponKillsPrecisionKillsSideArm: Stat1;
    weaponKillsPrecisionKillsSniper: Stat1;
    weaponKillsPrecisionKillsSubmachinegun: Stat1;
    weaponKillsPrecisionKillsSuper: Stat1;
    weaponKillsPulseRifle: Stat2;
    weaponKillsRelic: Stat2;
    weaponKillsRocketLauncher: Stat2;
    weaponKillsScoutRifle: Stat2;
    weaponKillsShotgun: Stat2;
    weaponKillsSideArm: Stat2;
    weaponKillsSniper: Stat2;
    weaponKillsSubmachinegun: Stat2;
    weaponKillsSuper: Stat2;
    weaponKillsSword: Stat2;
    weaponPrecisionKillsAutoRifle: Stat2;
    weaponPrecisionKillsFusionRifle: Stat2;
    weaponPrecisionKillsGrenade: Stat2;
    weaponPrecisionKillsHandCannon: Stat2;
    weaponPrecisionKillsMachinegun: Stat2;
    weaponPrecisionKillsMelee: Stat2;
    weaponPrecisionKillsPulseRifle: Stat2;
    weaponPrecisionKillsRelic: Stat2;
    weaponPrecisionKillsRocketLauncher: Stat2;
    weaponPrecisionKillsScoutRifle: Stat2;
    weaponPrecisionKillsShotgun: Stat2;
    weaponPrecisionKillsSideArm: Stat2;
    weaponPrecisionKillsSniper: Stat2;
    weaponPrecisionKillsSubmachinegun: Stat2;
    weaponPrecisionKillsSuper: Stat2;
    winLossRatio: Stat1;
    zonesCaptured: Stat2;
    zonesNeutralized: Stat2;
}

export interface Stat1 {
    basic: Basic;
    statId: string;
}

export interface Stat2 {
    basic: Basic;
    statId: string;
    pga: Basic;
}

export interface Stat3 {
    statHash: number;
    value: number;
    maximumValue: number;
}

export interface Stat4 {
    statHash: number;
    value: number;
    minimum: number;
    maximum: number;
}


export interface DisplayProperties {
    displayUnitsName: string;
    description: string;
    name: string;
    icon: string;
    hasIcon: boolean;

    //Optional runtime var
    nameLower?: string;
}