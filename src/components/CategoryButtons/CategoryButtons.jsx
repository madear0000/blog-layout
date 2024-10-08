import styles from './CategoryButtons.module.scss';
import React from 'react';
import clsx from 'clsx';

const categories = ['business', 'startup', 'economy', 'technology'];

export default function CategoryButtons({ selectedGroup, onGroupChange }) {
  return (
    <div className={styles.CategoryButtonsSection}>
        <h4>All Categories</h4>
        <div className={styles.groupButtons}>
            {categories.map(category => (
                <button
                key={category}
                className={clsx(
                  styles.groupButton,
                  selectedGroup === category && styles.active
                )}
                onClick={() => onGroupChange(category)}
                >
                <h3 className={styles.groupButton__title}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <p className={styles.groupButton__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </button>
            ))}
        </div>
    </div>
  );
};



