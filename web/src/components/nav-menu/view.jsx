import React from 'react';
import { useCycle } from 'framer-motion';
import { Toggle } from './components/toggle';
import { Navigation } from './components/navigation';
import { AnimatedStyledNav, StyledContainer } from './style';

const variants = {
  open: { right: 0, width: 280 },
  closed: { right: -280, width: 0 },
};

const NavMenu = ({ pages, companyName, logo, currentPath, ...themeProps }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <StyledContainer
      isOpen={isOpen}
      currentPath={currentPath}
      {...themeProps}
    >
      <AnimatedStyledNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.25 }}
        isOpen={isOpen}
        {...themeProps}
      >
        <Navigation
          pages={pages}
          toggle={() => toggleOpen()}
        />
      </AnimatedStyledNav>

      <Toggle
        toggle={() => toggleOpen()}
        fasIcon={isOpen ? 'times' : 'bars'}
      />
    </StyledContainer>
  );
};

export default NavMenu;
