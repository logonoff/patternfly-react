/**
 * This test was generated
 */
import { render } from '@testing-library/react';
import { LevelItem } from '../../LevelItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LevelItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<LevelItem children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
