import { Resolver, Query, Args } from '@nestjs/graphql';
import { Results } from '../models/results.model';
import { PeopleService } from './people.service';

@Resolver(() => Results)
export class PeopleResolver {
  
  constructor(private readonly peopleService: PeopleService) {}

  //returns people given page number
  @Query(() => Results)
  async getPeople(@Args('page') page: number):Promise<Results> {
    return await this.peopleService.getPeople(page);
  }

  //returns a person given person name
  @Query(() => Results)
  async getPerson(@Args('name') name: string): Promise<Results> {
    return await this.peopleService.getPerson(name);
  }
}
