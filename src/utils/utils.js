import { v4 as uuidv4 } from "uuid";
import DefaultAvatar from "../assets/default-avatar.svg";

export function getAvatarFromPath(avatar) {
  return avatar
    ? typeof avatar === "string"
      ? avatar
      : URL.createObjectURL(avatar)
    : DefaultAvatar;
}

export function getUid() {
  return uuidv4();
}
