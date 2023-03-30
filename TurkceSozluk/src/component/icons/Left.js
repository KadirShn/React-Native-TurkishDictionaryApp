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

export const SvgLeft = (props) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="" {...props}
    >
      <Path
        d="M19 7L10 16L19 25L21.2299 22.7701L14.4598 16L21.2299 9.22989L19 7Z"
        fill="currentColor"
      />
    </Svg>
  );
};
