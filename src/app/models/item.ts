export interface Item {
    title: string;
    desc: string;
    price: number;
    author: string;
    image: string;
    availibility: Availibility;
}

export enum Availibility {
    AVAILIBLE,
    UNAVAILIBLE
  }