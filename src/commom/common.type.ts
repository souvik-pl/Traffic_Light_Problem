export type LightColor = "green" | "yellow" | "red";

export type LightConfig = {
  color: LightColor;
  duration: number;
  next: LightColor;
};
