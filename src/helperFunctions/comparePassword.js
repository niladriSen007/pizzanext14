import bcrypt from "bcrypt";
export const comparePassword =async (password,hashPassword) =>{
    // console.log(password)
    // console.log(hashPassword)
    return await bcrypt.compare(password, hashPassword);
}