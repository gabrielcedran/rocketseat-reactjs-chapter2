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


