import { z, TypeOf } from 'zod';

export const movieSchema = z.object({
  body: z.object({
    id: z
          .string({ required_error: 'ID is required !' })
          .min(3,'You id must be more than 3'),
    name: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
    genre: z.enum(['Drama', 'Action','Comedy'],
             { required_error: 'type is required and must be one of this (Drama, Action, Comedy) !' }),
    rating: z.number({ required_error: 'number is required !' })
            .min(1, 'You must be between 1 - 5').max(5 , 'You must be between 1 - 5'),
    duration: z.number({ required_error: 'salary is required !' })
            .min(60,'You id must be more than 60')
      
  }),
});

export type MovieSchemaType = TypeOf<typeof movieSchema>['body'];