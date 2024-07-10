import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  position?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
