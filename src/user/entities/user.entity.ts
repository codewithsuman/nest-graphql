import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique identifier for user' })
  id: number;
  @Field({ description: 'name of the user' })
  name: string;
}
