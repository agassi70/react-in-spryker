import {appContainerStyles} from "src/shared/theme/properties/new/appContainerStyles";
import {appFixedDimensions} from "src/shared/theme/properties/new/appFixedDimensions";

export const getPopoverPosition = ({pageWidth, isSticky, showSearch, overFlow, popoverWidth}:
                                   {pageWidth: number;
                                    isSticky: boolean;
                                    showSearch: boolean;
                                    overFlow: number;
                                    popoverWidth: number;
                                   }): {top: number; left: number} => {

  const {headerHeight, customBreakpoints} = appFixedDimensions;
  const containerWidth = Number(appContainerStyles.maxWidth);
  const margin = (pageWidth - containerWidth) / 2;
  const overFlowNumber = (pageWidth < customBreakpoints.tablet ? 0 : overFlow);
  const fullHeaderHeight = (pageWidth < customBreakpoints.smallTablet ? headerHeight.tablet : headerHeight.desktop);

  const popoverPosLeft: number = margin + containerWidth - popoverWidth + overFlowNumber;
  let popoverPosTop: number = headerHeight.sticky;
  if (showSearch) {
    popoverPosTop = fullHeaderHeight;
  } else if (isSticky && !showSearch) {
    popoverPosTop = headerHeight.sticky;
  }

  return {
    top: popoverPosTop,
    left: popoverPosLeft,
  };
};
