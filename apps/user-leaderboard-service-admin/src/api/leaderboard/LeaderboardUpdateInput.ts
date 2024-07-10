import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  date?: Date | null;
  position?: number | null;
  user?: UserWhereUniqueInput | null;
};
