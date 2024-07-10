import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  position?: SortOrder;
  userId?: SortOrder;
};
