import { InputJsonValue } from "../../types";
import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  score?: number | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
};
