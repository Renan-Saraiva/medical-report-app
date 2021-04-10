import { Interaction } from "./interaction";

export class InteractionsOnDate {
    public date: Date;
    public interactions: Interaction[];
    
    public constructor(date: Date, interactions: Interaction[]) {
        this.date = date;
        this.interactions = interactions;
    }
}