import { atom } from "recoil";

export enum AppViewStateEnum {
  MEMBER = "Member",
  ADMIN = "Admin",
}

export const AppViewState = atom<AppViewStateEnum>({
  key: "AppViewState",
  default: AppViewStateEnum.MEMBER,
});
