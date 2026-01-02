import * as zod from "zod";

export const loginSchema = zod.object({
  username: zod.string().min(1, "Username tidak boleh kosong"),
  password: zod.string().min(1, "Password tidak boleh kosong"),
});
