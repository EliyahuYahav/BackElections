import User, { Users } from "../modules/userModel";
import Candidate, { ICandidate } from "../modules/CandidateModel";
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

export const AllCandidates = async (): Promise<ICandidate[] | void> => {
  const allCandidate: ICandidate[]| null = await Candidate.find();
  if (allCandidate) {
      return allCandidate
  }else throw Error
}

export const AllUsers = async (): Promise<Users[] | void> => {
  const allUsers: Users[]| null = await User.find();
  if (allUsers) {
      return allUsers
  }else throw Error
}


export const UpdateVoteUserAndCandidates = async (idUser: string, idCandidates:string)=>{
  const oneCandidate: ICandidate | null = await Candidate.findByIdAndUpdate(idCandidates, {$inc: { votes: 1 }, trim: true} );
  if(oneCandidate){
    await User.findByIdAndUpdate(idUser, {votedFor: oneCandidate._id, trim: true});
    return oneCandidate
  }
}

export const removeVoteUserAndCandidates = async (idUser: string, idCandidates:string)=>{
  const oneCandidate: ICandidate | null = await Candidate.findByIdAndUpdate({idCandidates, votes: { "$gt": 0 } },{ $inc: { votes: -1 } });
  if(oneCandidate){
    const correctUser: Users| null = await User.findByIdAndUpdate(idUser, {votedFor: null, trim: true});
    return correctUser
  }
}