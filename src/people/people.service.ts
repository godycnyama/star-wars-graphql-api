import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { Results } from '../models/results.model';

@Injectable()
export class PeopleService {
  constructor(private httpService: HttpService) {}

  //returns people given page number
  async getPeople(page: number): Promise<Results> {
    try {
      const response =  await this.httpService.get(`/people/?page=${page}`).toPromise();
      return response.data;
    }
    catch (error){
      throw(error);
    }
   
  }

   //returns a person given person name
  async getPerson(name: string): Promise<Results> {
    try {
      const response = await this.httpService.get(`/people/?search=${name}`).toPromise();
      return response.data;
    }
    catch(error){
      throw(error);
    }
    
  }
}
