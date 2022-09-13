import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Post {
  @Field({ description: 'Unique identifier for post' })
  id: string;
  @Field({ description: 'title for the post' })
  title: string;
  @Field({ description: 'body for the post' })
  body: string;
  @HideField()
  userId: number;
  @Field(() => User, {
    nullable: true,
    description: 'user who created the post',
  })
  createdBy?: User;
  @Field(() => User, {
    nullable: true,
    description: 'user who created the post',
  })
  updatedBy?: User;
}
