import React, { useRef } from 'react';
import { useCycle } from 'framer-motion';
import { useDimensions } from './components/use-dimensions';
import { MenuToggle } from './components/menu-toggle';
import { Navigation } from './components/navigation';
import { AnimatedStyledNav, AnimatedStyledBackground } from './style';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(26px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavMenu = ({ pages, companyName, ...themeProps }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <AnimatedStyledNav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      isOpen={isOpen}
      {...themeProps}
    >
      <AnimatedStyledBackground
        variants={sidebar}
        {...themeProps}
      />
      <span className='nav-title'>{companyName}</span>
      <Navigation
        pages={pages}
        toggle={() => toggleOpen()}
      />
      <MenuToggle
        toggle={() => toggleOpen()}
        stroke={themeProps.navMenuFg}
      />
    </AnimatedStyledNav>
  );
};

export default NavMenu;
