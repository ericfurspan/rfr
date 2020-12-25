import styled, { css } from 'styled-components';
import { hasFlexGrow } from './utils';
import { MEDIA } from '../../lib/helpers';

export const BoxMixin = css`
  /* Margin Props */
  margin: ${(props) => props.m || props.margin};
  margin-top: ${(props) => props.mt || props.marginTop};
  margin-right: ${(props) => props.mr || props.marginRight};
  margin-bottom: ${(props) => props.mb || props.marginBottom};
  margin-left: ${(props) => props.ml || props.marginLeft};

  /* Padding Props */
  padding: ${(props) => props.p || props.padding};
  padding-top: ${(props) => props.pt || props.paddingTop};
  padding-right: ${(props) => props.pr || props.paddingRight};
  padding-bottom: ${(props) => props.pb || props.paddingBottom};
  padding-left: ${(props) => props.pl || props.paddingLeft};

  /* Border Props */
  border-radius: ${(props) => props.bdr || props.borderRadius};

  /* Background Props */
  background: ${(props) => props.br || props.background};

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `};

  ${(props) =>
    props.flex &&
    props.row &&
    css`
      flex-direction: row;
    `};

  ${(props) =>
    props.flex &&
    props.col &&
    css`
      flex-direction: column;
    `};

  display: ${(props) => props.d || props.display};

  flex: ${(props) => props.f || (typeof props.flex === 'string' ? props.flex : undefined)};
  flex-basis: ${(props) => props.fb || props.flexBasis};
  flex-wrap: ${(props) => props.fw || props.flexWrap};
  flex-grow: ${(props) => props.fg || props.flexGrow};

  /* fixes flex-grow bug where children can stretch the parent */
  ${(props) =>
    hasFlexGrow(props) &&
    css`
      min-height: 0;
      min-width: 0;
    `}

  flex-shrink: ${(props) => props.fs || props.flexShrink};
  align-items: ${(props) => props.ai || props.alignItems};
  align-content: ${(props) => props.ac || props.alignContent};
  align-self: ${(props) => props.als || props.alignSelf};
  justify-items: ${(props) => props.ji || props.justifyItems};
  justify-content: ${(props) => props.jc || props.justifyContent};
  justify-self: ${(props) => props.js || props.justifySelf};

  ${(props) =>
    props.grid &&
    css`
      display: grid;
    `};

  /* CSS Grid Props */
  grid-template-columns: ${(props) => props.gtc || props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gtr || props.gridTemplateRows};
  grid-auto-rows: ${(props) => props.gar || props.gridAutoRows};
  grid-auto-columns: ${(props) => props.gac || props.gridAutoColumns};
  grid-column-start: ${(props) => props.gcs || props.gridColumnStart};
  grid-column-end: ${(props) => props.gce || props.gridColumnEnd};
  grid-column-gap: ${(props) => props.gcg || props.gridColumnGap};
  grid-row-start: ${(props) => props.grs || props.gridRowStart};
  grid-row-end: ${(props) => props.gre || props.gridRowEnd};
  grid-row-gap: ${(props) => props.grg || props.gridRowGap};
  grid-gap: ${(props) => props.gg || props.gridGap};
  grid-area: ${(props) => props.ga || props.gridArea};
  grid-column: ${(props) => props.gc || props.gridColumn};
  grid-row: ${(props) => props.gr || props.gridRow};

  ${(props) =>
    props.gridResponsive &&
    css`
      ${MEDIA.TABLET`
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto;

        & * {
          grid-column: 1 / -1 !important;
        }
      `};
    `}

  /* Layout Props */
  height: ${(props) => props.h || props.height};
  min-height: ${(props) => props.minh || props.minHeight};
  max-height: ${(props) => props.maxh || props.maxHeight};
  width: ${(props) => props.w || props.width};
  min-width: ${(props) => props.minw || props.minWidth};
  max-width: ${(props) => props.maxw || props.maxWidth};
  position: ${(props) => props.pos || props.position};
  top: ${(props) => props.t || props.top};
  bottom: ${(props) => props.b || props.bottom};
  left: ${(props) => props.l || props.left};
  right: ${(props) => props.r || props.right};
  z-index: ${(props) => props.zi || props.zIndex};
  text-align: ${(props) => props.ta || props.textAlign};

  ${(props) =>
    props.scroll &&
    css`
      overflow: auto;
    `}

  ${(props) =>
    props.scrollY &&
    css`
      overflow-y: auto;
    `}

    ${(props) =>
    props.scrollX &&
    css`
      overflow-x: auto;
    `}
`;

export const Box = styled.div`
  ${BoxMixin};
`;
