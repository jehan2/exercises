import { z, TypeOf } from 'zod';

export const studentSchema = z.object({
  body: z.object({
    id: z
          .string({ required_error: 'ID is required !' })
          .min(3,'You id must be more than 3'),
    name: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
    major: z.enum(['IT', 'IS','CS', 'SWE'],
           { required_error: 'type is required and must be one of this (IT, IS, CS, SWE) !' }),
    level: z.number({ required_error: 'number is required !' })
            .min(1, 'You must be between 1-8').max(8 , 'You must be between 1 - 8'),
    gpa: z.number({ required_error: 'salary is required !' })
           .min(1, 'You must be between 1 - 5').max(5 , 'You must be between 1 - 5')
      
  }),
});

export type StudentSchemaType = TypeOf<typeof studentSchema>['body'];