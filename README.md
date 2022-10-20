# ReactProject

## Brief
Requirements
1.Should be built in React
2.Each component should manage its own state
3.The components should be generated using a map()

Plan
Create the components you think you will need (at least an employee component,
possibly more)
Map over the data file below to create the components
Pass data into them via props
Use State to handle the increment and decrement of tickets
Style it however you like, but don’t leave it blank

### Final State
I have created a working ticket tracker app using react.  I have used the getState React hook to update the counter as well as using the .map function on the data array.

I have completed basic styling to the project so that it doesn't like quite so plain and ugly.

Some basic media queries have been added to alter the repeats in the grid to remove/reduce scrolling required in smaller devices.

The design, although unintentional, was desktop first, rather than mobile first.

Project stopped @ 1537 20 Oct 2022 as I have a functioning app with styling and I'd like to look at other React uses.

### Issues & Resolutions
Main issues still with the app;
  1-  BEM has been poorly used throughout the app.  This is because I was styling/naming components in different locations throughout the build and I was sometimes getting lost and just naming elements so I could quickly style as a visual indicator to help code.
  2- I initially had problems getting the counter to work as a seperate counter.  A seperate counter was on each employee card but clicking minus/plus on one was causing EVERY counter to go up or down.  I couldn't work out how to get the counter variables and state inside the .map function.  I resolved this by creating the counter func inside another componet and called this within the return in the EmployeeDetails.jsx component.
  3- When using hooks, the name of the component/function MUST start with an Uppercase letter.  React doesn't seem to like it when you don't
  4- SCSS Partials; I've not used them at all and all colouring is called in each individual element.  I haven't carried out the variables and partials work as I want to spend my time going over React lessons.
  5- Had initial problem with SASS not working.  Need to carry out install after loading up React Project (npm install sass --save-dev)
