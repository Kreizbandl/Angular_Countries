export interface Country {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
      alt?: string;
    };
    /* languages: {
        de: "German"
    }, */
    population: number;
  }