import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarGroupSpacers: React.FunctionComponent = () => {
  const groupGapItems = (
    <React.Fragment>
      <ToolbarGroup>
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const groupColumnGapItems = (
    <React.Fragment>
      <ToolbarGroup columnGap={{ default: 'columnGapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup columnGap={{ default: 'columnGapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup columnGap={{ default: 'columnGapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const groupRowGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap" rowGap={{ default: 'rowGapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup className="pf-m-wrap" rowGap={{ default: 'rowGapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup className="pf-m-wrap" rowGap={{ default: 'rowGapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  return (
    <>
      Using gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupGapItems}</ToolbarContent>
      </Toolbar>
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupColumnGapItems}</ToolbarContent>
      </Toolbar>
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupRowGapItems}</ToolbarContent>
      </Toolbar>
      <br />
    </>
  );
};
