

export const addStyleXY = (paramCssName: string,
  validName: boolean | undefined,
  validNameX: boolean | undefined,
  validNameY: boolean | undefined) => {

  return validName || (validNameX && validNameY)
  ? `${paramCssName}-x ${paramCssName}-y`
  : validNameX ? `${paramCssName}-x`
    : validNameY ? `${paramCssName}-y`
    : '';
}
