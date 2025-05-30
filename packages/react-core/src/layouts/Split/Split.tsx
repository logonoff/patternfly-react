import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { css } from '@patternfly/react-styles';

export interface SplitProps extends React.HTMLProps<HTMLDivElement> {
  /** Adds space between children. */
  hasGutter?: boolean;
  /** Allows children to wrap. */
  isWrappable?: boolean;
  /** content rendered inside the split layout. */
  children?: React.ReactNode;
  /** Additional classes added to the split layout. */
  className?: string;
  /** Sets the base component to render. Defaults to div. */
  component?: React.ReactNode;
}

export const Split: React.FunctionComponent<SplitProps> = ({
  hasGutter = false,
  isWrappable = false,
  className = '',
  children = null,
  component = 'div',
  ...props
}: SplitProps) => {
  const Component = component as any;
  return (
    <Component
      {...props}
      className={css(
        styles.split,
        hasGutter && styles.modifiers.gutter,
        isWrappable && styles.modifiers.wrap,
        className
      )}
    >
      {children}
    </Component>
  );
};
Split.displayName = 'Split';
