import { ObjectType, Field } from '@nestjs/graphql';
import { Person } from './person.model';

@ObjectType()
export class Results {
    @Field()
    count: number;
    @Field({ nullable: true })
    next?: string;
    @Field({ nullable: true })
    previous?: string;
    @Field(() => [Person])
    results: Person[];
}