import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { RiArrowLeftWideFill,  RiArrowRightWideFill} from "react-icons/ri";
function LeftArrow() {
  const visibility = useContext(VisibilityContext);
  if (!visibility) return null; 
  const disabled = visibility.isFirstItemVisible; 

  return (
    <button
      disabled={disabled}
      onClick={() => visibility.scrollPrev()}
      data-testid="left-arrow"
      className="left-btn scroll-btn"
    >
    <RiArrowLeftWideFill />
    </button>
  );
}

function RightArrow() {
  const visibility = useContext(VisibilityContext);
  if (!visibility) return null;
  const disabled = visibility.isLastItemVisible;

  return (
    <button
      disabled={disabled}
      onClick={() => visibility.scrollNext()}
      data-testid="right-arrow"
      className="right-btn scroll-btn"
    >
      <RiArrowRightWideFill />
    </button>
  );
}

export { LeftArrow, RightArrow };
