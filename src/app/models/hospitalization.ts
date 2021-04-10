import { Hospital } from "./hospital";
import { Patient } from "./patient";

export interface Hospitalization {
    id: string;
    patient: Patient;
    hospital: Hospital;
    entryAt: Date;
    updateAt: Date;
}