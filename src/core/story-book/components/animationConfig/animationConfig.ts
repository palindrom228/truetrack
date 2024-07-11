import {WithTimingConfig} from "react-native-reanimated";

export namespace AnimationConfig {
  const defaultDuration = 200;
  export const defaultTimingConfig: WithTimingConfig = {
    duration: defaultDuration,
  };
}
