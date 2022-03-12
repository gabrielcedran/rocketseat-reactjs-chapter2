# Rocketseat ReactJS Chapter 2

## Creating the project's foundation with create-react-app

create-react-app is a tool that speeds up creation of react projects by bootstrapping a foundation with the most used frameworks and tools.

To create a new project using this tool using npm, execute the command `npx create-react-app {app-name} --template typescript`. To create using yarn execute `yarn create react-app {app-name} --template typescript`. If you are not going to use TS simply remove the template parameter.

_Babel and webpack (and other) configurations are not stored directly in the project root dir in comparison with applications that are set up manually. They are stored within the react-scripts module. If custom configuration is required, it is necessary to eject*** the project but it comes with the price of having to maintain them manually afterwards instead of relying on the tool (turning upgrades harder)_

*** there are some tools that allow customisation to a certain degree not having to eject. But there could still be situations where ejecting is necessary to due the level of customisation needed.


