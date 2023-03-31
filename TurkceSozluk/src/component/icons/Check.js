import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Rect,
  Polyline,
  Mask,
} from "react-native-svg";

export const Check = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="" {...props}
    >
      <Path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
