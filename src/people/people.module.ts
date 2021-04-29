import { Module, HttpModule } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://swapi.dev/api/',
    }),
  ],
  providers: [PeopleService, PeopleResolver]
})
export class PeopleModule {}
