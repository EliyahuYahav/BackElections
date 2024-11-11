import User, { Users } from "../modules/userModel";
import Candidate from "../modules/CandidateModel";
import bcrypt from 'bcrypt';

export const registerUser = async (user: Users): Promise<Users | void> => {
  try {
    const passwordHash = await bcrypt.hash(user.password.toString(), 10);
    user.password = passwordHash
    user.hasVoted = false
    user.votedFor = null
    await User.create(user);
    return user;
  } catch (error) {
    throw error;
  };
};

export const authenticateUser = async (username: string, password: string): Promise<Users | null> => {
 try {
   const user: Users | null = await User.findOne({username: username})
   if (user && await bcrypt.compare(password.toString(), user.password)) {
     return user;
   }
   throw new Error("user not found");
 } catch (error) {
   throw error;
 }
};


export const AllCandidates = async (): Promise<Users[] | void> => {
  const allUsers: Users[]| null = await Candidate.find();
  if (allUsers) {
      return allUsers
  }else throw Error
}
