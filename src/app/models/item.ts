export interface Item {
    title: string;
    desc: string;
    price: number;
    author: string;
    image: string;
    availibility: Availability;
}

export enum Availability {
    AVAILABLE = "Available",
    UNAVAILABLE = "Unavailable"
}
