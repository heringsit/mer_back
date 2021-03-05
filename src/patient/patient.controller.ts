import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, Req, Delete, Param, Put} from '@nestjs/common';
import { PatientDto } from './entities/patient.dto';
import {PatientService} from './patient.service';

@Controller('patient')
export class PatientController{
    constructor(private readonly patientService: PatientService){}
    
    @Post()
    addPatient(@Body() patientDto: PatientDto){
        return this.patientService.addPatient(patientDto);
    }
}