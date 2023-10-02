import { BorderColors, MS_TIME } from './constnts';

export const getItemBottomBorderColor = (publishedTime: string): string => {
  const now: number = new Date().getTime();
  const timeAfterPublication: number = now - Date.parse(publishedTime);
  let borderColor: string = BorderColors.yellow;

  if (timeAfterPublication > MS_TIME.SIX_MONTH) borderColor = BorderColors.red;
  if (timeAfterPublication < MS_TIME.MONTH) borderColor = BorderColors.green;
  if (timeAfterPublication < MS_TIME.SEVEN_DAYS)
    borderColor = BorderColors.blue;

  return borderColor;
};
