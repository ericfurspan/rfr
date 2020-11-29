/**
 * Helper to determine if given flex grop prop is greater than 0
 *
 * @param  {String|Number} fl - flex grow prop
 * @return {Boolean} has flex grow prop
 */
export const hasFlexGrowProp = (fl) => {
  const flNum = Number.parseInt(fl, 10);

  return !Number.isNaN(flNum) && flNum > 0;
};

/**
 * Helper to determine if given flex grop shortand prop is greater than 0
 *
 * @param  {String} fl - flex grow shorthand prop
 * @return {Boolean} has flex grow shorthand prop
 */
export const hasFlexGrowShortHand = (fl) => {
  if (typeof fl !== 'string') {
    return false;
  }

  return hasFlexGrowProp(fl.split(' ')[0]);
};

/**
 * Helper to determine if a variety of optional parameters have flex grow
 *
 * @param  {String} options.f - flex grow shorthand
 * @param  {String} options.flex - flex grow shorthand
 * @param  {String|Number} options.flexGrow - flex grow prop
 * @param  {String|Number} options.fg - flex grow prop
 * @return {Boolean} has flex grow
 */
export const hasFlexGrow = ({ f, flex, flexGrow, fg }) =>
  hasFlexGrowProp(fg) ||
  hasFlexGrowProp(flexGrow) ||
  hasFlexGrowShortHand(f) ||
  hasFlexGrowShortHand(flex);

const boxPropsList = [
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'display',
  'f',
  'flex',
  'row',
  'col',
  'fb',
  'flexBasis',
  'fw',
  'flexWrap',
  'fg',
  'flexGrow',
  'fs',
  'flexShrink',
  'ai',
  'alignItems',
  'ac',
  'alignContent',
  'as',
  'alignSelf',
  'ji',
  'justifyItems',
  'jc',
  'justifyContent',
  'js',
  'justifySelf',
  'ga',
  'gridArea',
  'gtc',
  'gridTemplateColumns',
  'gtr',
  'gridTemplateRows',
  'grs',
  'gridRowStart',
  'gre',
  'gridRowEnd',
  'grg',
  'gridRowGap',
  'gcs',
  'gridColumnStart',
  'gce',
  'gridColumnEnd',
  'gcg',
  'gridColumnGap',
  'gc',
  'gridColumn',
  'gr',
  'gridRow',
  'gg',
  'gridGap',
  'w',
  'width',
  'minw',
  'minWidth',
  'maxw',
  'maxWidth',
  'h',
  'height',
  'minh',
  'minHeight',
  'maxh',
  'maxHeight',
  'pos',
  'position',
  't',
  'top',
  'r',
  'right',
  'b',
  'bottom',
  'l',
  'left',
  'zi',
  'zIndex',
  'scrollX',
  'scrollY',
  'scroll',
];

/**
 * Filters out the all props that do not apply to the Box model
 * @param {Object} props - List of props to be filtered
 * @return {List} - Filtered Props
 */
export const boxProps = (props) =>
  Object.keys(props).reduce(
    (accum, key) => (boxPropsList.includes(key) ? { ...accum, [key]: props[key] } : accum),
    {}
  );

/**
 * Filters out the all props that apply to the Box model
 * @param {Object} props - List of props to be filtered
 * @return {List} - Filtered Props
 */
export const nonBoxProps = (props) =>
  Object.keys(props).reduce(
    (accum, key) => (!boxPropsList.includes(key) ? { ...accum, [key]: props[key] } : accum),
    {}
  );
