export interface Country {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
    };
    /* languages: {
        de: "German"
    }, */
    population: number;
  }