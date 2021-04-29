import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Person {
    @Field()
    name: string;

    @Field()
    height: string; 

    @Field()
    mass: string; 

    @Field()
    gender: string;

    @Field()
    homeworld: string;
}