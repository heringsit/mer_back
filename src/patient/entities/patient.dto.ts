import { IsString, IsNumber, IsEmail, IsPhoneNumber, Min, Max, IsDate, Length} from 'class-validator';
export class PatientDto{
    birthYear:number;
    gender:string;
    weight:number;
    vaccine:string;
    shotDay:Date;
    isPregnant:string;
    
    highBloodPressure:boolean;
    diabetes : boolean;
    dyslipidemia : boolean;
    heartBrainVessel : boolean;
    diseasesEtc: string;

    pain : boolean;
    heat : boolean;
    redness : boolean;
    edema : boolean;
    itching : boolean;
    maturation : boolean;
    waterblister : boolean;
    fatigue : boolean;
    musclePain : boolean;
    jointPain : boolean;
    chills : boolean;
    fever : boolean;
    throwup : boolean;
    nausea : boolean;
    headache : boolean;
    whirl : boolean;
    breathingTrouble : boolean;
    symptomEtc :string;

    symptomStart: Date;
    symptomEnd: Date;
    // symptomAroundShot:string[];
    // symptomWhole:string[];
    progress:string;
    seriousSideEffect:string;
}