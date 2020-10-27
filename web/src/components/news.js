import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { responsiveTitle4, paragraph } from './typography.module.css';
import styles from './news.module.css';

const News = ({ title, items }) => (
  <div>
    {title && <h2 className={responsiveTitle4}>{title}</h2>}
    <Card className={styles.card}>
      <ListGroup variant='flush'>
        {items.map((item) => (
          <ListGroup.Item key={item.url}>
            <p className={paragraph}>{item.source}</p>
            <Card.Link href={item.url}>{item.title}</Card.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  </div>
);

export default News;
