---
id: Stack
cssPrefix: pf-v6-l-stack
section: layouts
propComponents: ['Stack', 'StackItem']
---

import './stack.css';

## Examples

### Basic

```js
import { Stack, StackItem } from '@patternfly/react-core';

<Stack>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>;
```

### With gutter

```js
import { Stack, StackItem } from '@patternfly/react-core';

<Stack hasGutter>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>;
```
