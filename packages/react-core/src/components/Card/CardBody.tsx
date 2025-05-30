import styles from '@patternfly/react-styles/css/components/Card/card';
import { css } from '@patternfly/react-styles';

import type { JSX } from 'react';

export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Body */
  children?: React.ReactNode;
  /** Additional classes added to the Card Body */
  className?: string;
  /** Sets the base component to render. defaults to div */
  component?: keyof JSX.IntrinsicElements;
  /** Enables the body Content to fill the height of the card */
  isFilled?: boolean;
}

export const CardBody: React.FunctionComponent<CardBodyProps> = ({
  children,
  className,
  component = 'div',
  isFilled = true,
  ...props
}: CardBodyProps) => {
  const Component = component as any;
  return (
    <Component className={css(styles.cardBody, !isFilled && styles.modifiers.noFill, className)} {...props}>
      {children}
    </Component>
  );
};
CardBody.displayName = 'CardBody';
