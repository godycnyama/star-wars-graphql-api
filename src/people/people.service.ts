import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { Results } from '../models/results.model';

@Injectable()
export class PeopleService {
  constructor(private httpService: HttpService) {}

  //returns people given page number
  async getPeople(page: number): Promise<Results> {
    console.log("Get people called");
    try {
      const response =  await this.httpService.get(`/people/?page=${page}`).toPromise();
      console.log(response.data);
      return response.data;
    }
    catch (error){
      throw(error);
    }
   
  }

   //returns a person given person name
  async getPerson(name: string): Promise<Results> {
    console.log("Get person called");
    try {
      const response = await this.httpService.get(`/people/?search=${name}`).toPromise();
      console.log(response.data);
      return response.data;
    }
    catch(error){
      throw(error);
    }
    
  }
}
