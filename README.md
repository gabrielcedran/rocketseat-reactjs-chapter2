# Rocketseat ReactJS Chapter 2

## Creating the project's foundation with create-react-app

create-react-app is a tool that speeds up creation of react projects by bootstrapping a foundation with the most used frameworks and tools.

To create a new project using this tool using npm, execute the command `npx create-react-app {app-name} --template typescript`. To create using yarn execute `yarn create react-app {app-name} --template typescript`. If you are not going to use TS simply remove the template parameter.

_Babel and webpack (and other) configurations are not stored directly in the project root dir in comparison with applications that are set up manually. They are stored within the react-scripts module. If custom configuration is required, it is necessary to eject*** the project but it comes with the price of having to maintain them manually afterwards instead of relying on the tool (turning upgrades harder)_

*** there are some tools that allow customisation to a certain degree not having to eject. But there could still be situations where ejecting is necessary to due the level of customisation needed.

## CSS in JS

CSS in JS is a strategy where javascript is used to style components. It can either inject styles into the DOM at runtime or using the CSSStyleSheet API. For this project `styled components` is going to be used - but there are other options out there like `emotion`, `tailwind`, etc.

Start by including the dependency (`yarn add styled-components`) and it's types module (`yarn add -D @types/styled-components`).
Afterwards install styled-components extension to have syntax highlight and auto-complete when defining new components (`vscode-styled-components`).

One of the advantages of using CSS in JS is the fact that styles are contained within its component (scoped css) - you won't have styles of one component causing side-effect in another like classes could do.

#### Comparing regular css with styled components:

Regular CSS (pre-processors like sass would be very similar):

```
// When using regular css, we would have to create a css file with its styles and then import it in the relevant js file:

// App.css
.title {
    font-size: 64px;
    color: #8257e6;
}

// App.tsx
import './App.css';

export function App() {
  return (
    <div className="App">
      <h1 className="title">Hello World!</h1>
    </div>
  );
}

```

CSS in JS example (styled components):

```
// when using styled components we create components that are already styled - we do not use className

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
  
`
export function App() {
  return (
    <div className="App">
      <Title>Hello World!</Title>
    </div>
  );
}
```

## Notes

### Accessibility (a11y)

By default browsers set the font-size to 16px - which is ideal for desktop. When changing font and component sizes it is recommended (and good practice) to use a relative unit (like `percentage`, `rem` or `em`) rather than fixed ones (like `px`) because in case the user increases or decreases the default font size of their browser the UI will adjust according to their needs instead of forcing a specific one (somebody with visual impairment might want to zoom in and forcing a pre-determined size would not be nice).

Example: setting up the app's default font size for devices that have smaller resolutions:

```
    // the default font-size is 16px
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 93.75% of 16px this 15px - if we forced 15px users could not change it in case they needed
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 87.5% of 16px this 14px
        }
    }
```

Once the default font size of the application is defined, it is good to use the unit `rem` (or `em`) to define components sizes (like divs). 1 rem is equals the size of the default font size - in the case above, any device bigger than 1080px, 1 rem = 16px. For devices up to 1080px, 15px. For devices up to 720px, 15px. It also favours better responsive pages.

`rem` is related to the html default font size. `em` to its parent element.



### why using axios instead of fetch

Among other reasons:

- Fetch requires the whole URL (and namespace) to be provided every time
- Fetch requires two steps in order to extract the response body (it would be possible to create an abstraction however using an abstraction that is widely used by the community is more reliable)
- Axios allows to easily intercept and manipulate requests and responses (e.g in case the server return 401, redirect the client to login page)

### react-modal

Instead of developing our own modal it is easier and better to use the lib `react-modal` that is maintained by the community and is part of the community reactjs github.

It implements a bunch of functionalities and good practices that should be applied when working with modals - including a11y.

- `yarn add react-modal`


### Polished lib

When using a css in js, for obvious reasons it is possible to use js functions to manipulate the css (like colours, etc). Polished lib has a bunch of helpers to modify colours.

Example without polished to change the border-colour on mouse hover:

```
button {
    border: 1px solid #d7d7d7;

    transition: border-color 0.2s;
    
    &:hover {
        border-color: #fff; // in this case filter with brightness wouldn't work as it would change the whole component colour not only the border
    }
}
```

Example with polished:

```
import { darken } from "polished";
...
button {
    border: 1px solid #d7d7d7;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}; // darkens the colour in 10%
    }
}
```

Adding the dependency `yarn add polished`