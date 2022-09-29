import { ReactNode } from 'react';
import styles from './categoryCard.module.scss';

type CategoryCardProps = { text: string; onCardClick?: () => void };
const CategoryCard = ({ text, onCardClick = () => {} }: CategoryCardProps) => (
  <div className={styles.card} onClick={onCardClick}>
    {text}
  </div>
);

type CategoryCardContainerProps = { children: ReactNode };
const CategoryCardContainer = ({ children }: CategoryCardContainerProps) => <div className={styles.cardContainer}>{children}</div>;

export { CategoryCard, CategoryCardContainer };
