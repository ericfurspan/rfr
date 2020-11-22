import React, { useState } from 'react';
import styled from 'styled-components';

import { buildImageObj, MEDIA } from '../../../lib/helpers';
import { imageUrlFor } from '../../../lib/image-url';

const StyledWrapper = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  margin: 2rem -1.5rem;
  overflow: hidden;
  padding: 1rem;

  ${MEDIA.MIN_PHONE`
    margin: 2rem -2rem;
 `};

  ${MEDIA.MIN_TABLET`
    margin: 2rem 0;
 `};
`;

const StyledNav = styled.div`
  padding: 0.5rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  & button {
    outline: none;
    -webkit-font-smoothing: inherit;
    appearance: none;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }
`;

const StyledCarousel = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transition: transform 250ms;
`;

const StyledSlide = styled.li`
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  box-sizing: border-box;
  padding: 0 0.5rem;

  & img {
    width: 100%;
    height: auto;
  }
`;

const Slideshow = ({ slides }) => {
  const [index, setIndex] = useState(0);

  if (!slides) return null;

  const handlePrev = () => setIndex(Math.max(index - 1, 0));
  const handleNext = () => setIndex(Math.min(index + 1, slides.length - 1));

  return (
    <StyledWrapper>
      <StyledNav>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of {slides.length}
        </span>
        <button onClick={handleNext} disabled={index === slides.length - 1}>
          Next
        </button>
      </StyledNav>
      <StyledCarousel
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {slides.map(slide => (
          <StyledSlide key={slide._key}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .url()}
              />
            )}
          </StyledSlide>
        ))}
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default Slideshow;
