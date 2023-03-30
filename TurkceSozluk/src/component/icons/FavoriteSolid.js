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

export const SvgFavoriteSolid = (props) => {
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
        d="M25.3333 13.5093V12.176V5.50931C25.3333 4.03865 24.1373 2.84265 22.6667 2.84265H9.33335C7.86269 2.84265 6.66669 4.03865 6.66669 5.50931V12.176V13.5093V29.3333L16 23.112L25.3333 29.3333V13.5093Z"
        fill="currentColor"
      />
    </Svg>
  );
};
