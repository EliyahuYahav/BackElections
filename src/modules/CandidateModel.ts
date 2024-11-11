import { Schema } from "mongoose";
import mongoose from "mongoose";

const CandidateSchema:Schema = new mongoose.Schema({
    name: {type : String},
    image: {type : String},
    votes: {type : Number}
  });
  
  export interface ICandidate {
    name: string,
    image: string,
    votes:number
  }
  
  export default mongoose.model("Candidate", CandidateSchema);