import styled from 'styled-components';

export const StyledListItem = styled.li`
  font-size: var(--font-small-size);
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:last-child {
    flex: 1;
    margin-left: 1rem;
  }
`;

export const StyledAvatar = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  background: var(--color-very-light-gray);
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;
