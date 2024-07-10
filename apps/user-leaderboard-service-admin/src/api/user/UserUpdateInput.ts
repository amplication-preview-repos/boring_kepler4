import { InputJsonValue } from "../../types";
import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  score?: number | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
};
