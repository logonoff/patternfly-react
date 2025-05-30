import { createRef, useEffect, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { Panel } from '../Panel';
import { PanelMain } from '../PanelMain';
import { PanelMainBody } from '../PanelMainBody';
import userEvent from '@testing-library/user-event';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panel">
      <Panel />
    </div>
  );
  expect(screen.getByTestId('panel').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panel}`, () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.panel);
});

test(`Renders with only the class ${styles.panel} by default`, () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.panel, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Panel className="test-class">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test(`Renders with class name ${styles.modifiers.raised} when variant is raised`, () => {
  render(<Panel variant="raised">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.raised);
});

test(`Renders with class name ${styles.modifiers.bordered} when variant is bordered`, () => {
  render(<Panel variant="bordered">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.bordered);
});

test(`Renders with class name ${styles.modifiers.secondary} when variant is secondary`, () => {
  render(<Panel variant="secondary">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.secondary);
});

test(`Renders with class name ${styles.modifiers.scrollable} when isScrollable is true`, () => {
  render(<Panel isScrollable>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.scrollable);
});

test('Renders with ref', async () => {
  const user = userEvent.setup();
  const panelRef: React.RefObject<HTMLDivElement | null> = createRef();

  const BasicPanel = () => {
    const [lastClickWasInPanel, setLastClickWasInPanel] = useState(false);

    const handleClick = (event) => {
      if (panelRef.current && panelRef.current.contains(event.target)) {
        setLastClickWasInPanel(true);
      } else {
        setLastClickWasInPanel(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClick);
    }, []);

    return (
      <div>
        <Panel ref={panelRef}>
          <PanelMain>
            <PanelMainBody>Main content</PanelMainBody>
          </PanelMain>
        </Panel>
        <p>Last click was in panel: {lastClickWasInPanel ? 'true' : 'false'}</p>
      </div>
    );
  };

  render(<BasicPanel />);

  await user.click(document.body);
  expect(screen.getByText('Last click was in panel: false')).toBeVisible();
  await user.click(screen.getByText('Main content'));
  expect(screen.getByText('Last click was in panel: true')).toBeVisible();
});

test('Renders with the inherited element props spread to the component', () => {
  render(<Panel aria-label="this is a simple panel">Test</Panel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Panel>Test</Panel>);
  expect(asFragment()).toMatchSnapshot();
});
