import { JsonValue } from "type-fest";
import { Leaderboard } from "../leaderboard/Leaderboard";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  score: number | null;
  leaderboards?: Array<Leaderboard>;
};
