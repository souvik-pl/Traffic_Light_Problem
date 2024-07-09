import { LightColor, LightConfig } from "./common.type";

export const LIGHT_CONFIG: Record<LightColor, LightConfig> = {
  green: {
    color: "green",
    duration: 3000,
    next: "yellow",
  },
  yellow: {
    color: "yellow",
    duration: 500,
    next: "red",
  },
  red: {
    color: "red",
    duration: 4000,
    next: "green",
  },
};
