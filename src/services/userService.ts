import Users, { User } from "../modules/userModel";
import bcrypt from 'bcrypt';

export const registerUser = async (user: User): Promise<User | void> => {
  try {
    const passwordHash = await bcrypt.hash(user.password.toString(), 10);
    user.password = passwordHash
    await Users.create(user);
    return user;
  } catch (error) {
    throw error;
  };
};

export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
 try {
   const user: User | null = await Users.findOne({username: username})
   if (user && await bcrypt.compare(password.toString(), user.password)) {
     return user;
   }
   throw new Error("user not found");
 } catch (error) {
   throw error;
 }
};
