import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './patient/entities/patient.entity'
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "mer_admin",
    "password": "herings2015",
    "database": "mer",
    "synchronize": true,
    "logging": false,
    "entities":[Patient],
  }), PatientModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
