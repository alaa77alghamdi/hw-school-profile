import { z, TypeOf } from "zod";

export const studentType = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "wright type is name",
      })

      .min(2, "name is too long"),

      
      age: z.number({
        required_error: "age is required",
        invalid_type_error: "wright type is age",
  
    }).max(30, "age is not allowed")
    .min(19,"age is not allowed"),
  }),
});

export type studentType = TypeOf<typeof studentType> ["body"];
