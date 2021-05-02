import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({ autoSchemaFile: true, playground: true }),
    PeopleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
