# Class 5

## Key Points
### Folder structure
  - use pages and components folders
  - granulate CSS code to belonging components
#### Good reads:
  - https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e
  - https://www.geeksforgeeks.org/folder-structure-for-a-react-js-project/
  - https://dev.to/itswillt/folder-structures-in-react-projects-3dp8

### Reusable components
  - create small (atomic) components
  - use them as building blocks
  - make them work regardless of data component received as props
  - do not hard code values
#### Good reads:
  - https://www.freecodecamp.org/news/how-to-build-reusable-react-components/

### Dedicated API services
  - functions for API data flow move to separate files
  - organize services by grouping them per endpoint or per entity they are working with

### Good practices
#### Imports
  - externals first
  - my components, services, helpers, etc. second
  - style goes last
#### Coding style
  - give descriptive and meaningful names to the components
  - write clean code
  - be consistent in coding style
### Widely used coding style
- https://airbnb.io/javascript/react/
#### Good Reads
- https://dev.to/abrahamlawson/react-style-guide-24pp
- https://www.freecodecamp.org/news/best-practices-for-react/


### Homework 
- create Footer component using Header component as boilerplate
- create reusable Button component
  - label
  - onClick
- use Button component to add delete button to each Task 
- delete button should remove todo item from list
- item should be removed from the UI
