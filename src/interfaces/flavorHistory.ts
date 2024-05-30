export type HistoryType = "year" | "thema"

export type FlavorHistories = {
  [type in HistoryType]: {
    [key: string]: [
      string,
      string[]
    ]
  }
};

export type FlavorHistoryArr = [string, string[]]