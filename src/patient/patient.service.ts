import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoreOutput } from 'src/common/entity/core.output';
import { Repository } from 'typeorm';
import { PatientDto } from './entities/patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService{
    constructor(
        @InjectRepository(Patient) private readonly patients : Repository<Patient>
    ){}

    async addPatient(patientData : PatientDto): Promise<CoreOutput>{
        try{
            const result = await this.patients.save(patientData);
            return {ok:true}
        }catch(ex){
            return {ok:false, error:ex}
        }
    }
}