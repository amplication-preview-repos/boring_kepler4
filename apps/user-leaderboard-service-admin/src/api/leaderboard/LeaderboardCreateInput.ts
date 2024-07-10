import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  date?: Date | null;
  position?: number | null;
  user?: UserWhereUniqueInput | null;
};
