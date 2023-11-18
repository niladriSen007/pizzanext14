import bcrypt from "bcrypt";
export const hashedPassword = async (pass) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltRounds);
    return hashedPassword;
  } catch (e) {
    console.log(e);
  }
};
