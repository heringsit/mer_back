import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class Patient extends CoreEntity{
    @Column()
    birthYear:number;

    @Column()
    gender:string;

    @Column({ type: 'numeric' })
    weight:number;

    @Column()
    vaccine:string;

    @Column({ type: 'date' })
    shotDay:Date;

    @Column({nullable:true})
    isPregnant:string;

    @Column({type:'date'})
    symptomStart: Date;

    @Column({type:'date'})
    symptomEnd: Date;

    @Column({type:'boolean'})
    highBloodPressure:boolean;

    @Column({type:'boolean'})
    diabetes:boolean;

    @Column({type:'boolean'})
    dyslipidemia:boolean;

    @Column({type:'boolean'})
    heartBrainVessel:boolean;
    
    @Column({nullable:true})
    diseasesEtc:string;

    @Column({type:'boolean'})
    pain:boolean;

    @Column({type:'boolean'})
    heat:boolean;

    @Column({type:'boolean'})
    redness:boolean;

    @Column({type:'boolean'})
    edema:boolean;
    
    @Column({type:'boolean'})
    itching:boolean;

    @Column({type:'boolean'})
    maturation:boolean;

    @Column({type:'boolean'})
    waterblister:boolean;

    @Column({type:'boolean'})
    fatigue:boolean;

    @Column({type:'boolean'})
    musclePain:boolean;

    @Column({type:'boolean'})
    jointPain:boolean;

    @Column({type:'boolean'})
    chills:boolean;

    @Column({type:'boolean'})
    fever:boolean;

    @Column({type:'boolean'})
    throwup:boolean;

    @Column({type:'boolean'})
    nausea:boolean;

    @Column({type:'boolean'})
    headache:boolean;

    @Column({type:'boolean'})
    whirl:boolean;

    @Column({type:'boolean'})
    breathingTrouble:boolean;

    @Column({nullable:true})
    symptomEtc:string;

    // @Column({type:'text', array: true})
    // takingMedicine:string[];

    // @Column({type:'text', array:true})
    // symptomAroundShot:string[];

    // @Column({type:'text', array:true})
    // symptomWhole:string[];

    @Column()
    progress:string;

    @Column()
    seriousSideEffect:string;

}