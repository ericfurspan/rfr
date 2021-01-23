import styled, { css } from 'styled-components';

import { MEDIA } from '../../lib/helpers';
import { BoxMixin } from '..';

/**
 * A template of base input styles
 */
const inputStyleTemplate = css`
  ${BoxMixin};

  background-color: var(--color-white);
  border-color: var(--color-very-light-gray);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  align-self: stretch;
  box-sizing: border-box;
  padding: 2px 4px 2px 8px;
  width: inherit;
  max-width: 550px;
  height: 36px;
  outline: 0;

  ::placeholder {
    color: var(--color-gray);
    font-family: var(--font-family-helvetica);
  }
  :disabled {
    background-color: var(--color-very-light-gray);
  }

  :focus {
    box-shadow: none;
    border-width: 2px;
    border-color: var(--color-link);
  }
`;

export const StyledSelect = styled.select`
  ${inputStyleTemplate};
`;

export const StyledInput = styled.input`
  ${inputStyleTemplate};

  &[type='checkbox'],
  &[type='radio'] {
    height: initial;
    margin-top: 0;
    margin-bottom: 0;
    width: auto;
  }
`;

/**
 * Styled `label` element. Accepts `labelProps` as defined in ./constants.
 */
export const StyledLabel = styled.label`
  font-size: 0.75rem;
  font-family: var(--font-family-sans);
  font-weight: 500;
  white-space: pre;
  user-select: none;
  padding: 0 0.25rem;
  margin-bottom: 1.125rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 550px;

  & > input,
  select {
    margin-top: 2px;
  }

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;

      & > input,
      select {
        margin-left: 2px;
      }
    `}

  ${(props) =>
    props.nestedLabel &&
    css`
      font-weight: 500;
      margin-bottom: 0;
    `}
`;

export const StyledLegend = styled.legend`
  font-family: var(--font-family-helvetica);
  font-size: 0.75rem;
  font-weight: 600;
`;

export const StyledFieldset = styled.fieldset`
  ${BoxMixin};

  display: flex;
  flex-direction: column;
  border: 0;
  padding: 0 0.25rem;
  margin: 0;
  width: 100%;
`;

export const StyledError = styled.span`
  color: var(--color-danger);
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  bottom: 0;
`;

export const StyledButton = styled.button`
  ${BoxMixin};

  background-color: var(--color-light-gray);
  color: var(--color-white);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  min-height: 38px;
  padding: 0 24px;
  justify-content: center;
  border-radius: 6px;
  border: 0;
  vertical-align: middle;
  white-space: nowrap;
  transition: opacity 200ms linear, color 200ms linear;

  &:hover:not(:disabled) {
    opacity: 0.95;
  }

  ${(props) =>
    props.design === 'primary' &&
    css`
      background-color: var(--color-link);
      color: var(--color-white);
      border: 1px solid var(--color-link);
    `}

  ${(props) =>
    props.design === 'secondary' &&
    css`
      background-color: var(--color-dark-white);
      color: var(--color-black);
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      min-height: 42px;
      min-width: 126px;
    `};

  ${(props) =>
    props.size === 'large' &&
    css`
      min-height: 56px;
      min-width: 224px;
      font-size: 1.125rem;

      ${MEDIA.PHONE`
        min-height: 42px;
        min-width: 126px;
        font-size: initial;
      `};      
    `};

  ${(props) =>
    props.size === 'xlarge' &&
    css`
      min-height: 72px;
      min-width: 248px;
      font-size: 1.25rem;

      ${MEDIA.PHONE`
        min-height: 56px;
        min-width: 224px;
        font-size: initial;
      `};
  `};

  & svg {
    margin: 0 0.75rem;
    vertical-align: middle;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--color-very-light-gray);
      color: var(--color-dark-gray);
      cursor: not-allowed !important;
      border: 0;
  `};

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 300px;
  `};
`;
