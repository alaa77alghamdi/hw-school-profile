import { z, TypeOf } from "zod";

export const teacherType = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "wright type is name",
      })

      .min(2, "name is too long"),

      
  
  }),
});

export type teacherType = TypeOf<typeof teacherType> ["body"];
