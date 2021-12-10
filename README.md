# WCAG Components

  - [Getting started](#getting-started)
  - [Usage](#usage)
    - [Accordion](#accordion)
## Getting started

To install the package run the following command:

```javascript
npm install wcag-react-components
```

## Usage
To use a react component, import the component as a named import:

### Accordion

```javascript
import { Accordion } from 'wcag-react-components';

const MyApp = (props) => (
    <Accordion>
      <Accordion.Item label="Accordion trigger">This is my accordion content</Accordion.Item>
    </Accordion>
)
```