import React, { useState } from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import styles from './slideshow.module.css';

const Slideshow = ({ slides }) => {
  const [index, setIndex] = useState(0);

  if (!slides) return null;

  const handlePrev = () => setIndex(Math.max(index - 1, 0));
  const handleNext = () => setIndex(Math.min(index + 1, slides.length - 1));

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of {slides.length}
        </span>
        <button onClick={handleNext} disabled={index === slides.length - 1}>
          Next
        </button>
      </div>
      <ul
        className={styles.carousel}
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {slides.map(slide => (
          <li key={slide._key} className={styles.slide}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .url()}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slideshow;
