import { InteractionType } from "../enums/interaction-type";

export interface Interaction {
    id: string;
    interactionAt: Date;
    type: InteractionType;
    professionalName: string;
    [key: string]: any;
}