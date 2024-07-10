import { User } from "../user/User";

export type Leaderboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  position: number | null;
  user?: User | null;
};
