import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { responsiveTitle4, small } from './typography.module.css';
import styles from './podcasts.module.css';
import { cn } from '../lib/helpers';

const Podcasts = ({ title, subtitle, items }) => (
  <div>
    {title && <h2 className={cn(responsiveTitle4, styles.title)}>
      <FontAwesomeIcon icon='podcast' />
      <span>{title}</span>
    </h2>}
    {subtitle && <h2 className={small}>{subtitle}</h2>}
    <Card className={styles.card}>
      <ListGroup variant='flush'>
        {items.map((item) => (
          <ListGroup.Item key={item.url}>
            {item.icon && <FontAwesomeIcon icon={[item.icon.faPackage, item.icon.faIconName]} className={styles.icon} />}
            <Card.Link href={item.url}>{item.title}</Card.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  </div>
);

export default Podcasts;
