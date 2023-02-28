# To do list manager webapp
## Project title: To Do List 
  -- Webapp to make task lists to be done
  
## Features:
              1. Add a task
              2. Mark a task as completed
              3. Delete a task
              4. Remove all tasks from the list
              
## Instructions: 
              1. Add the task in the input section
              2. Plus sign: to add the entered task to the list
              3. Square box: Each task can be checked after completion and task text is cut through
              4. Delete icon: Each task can be deleted by clicking it.
              5. Remove button: To remove all the tasks from the list
              6. The list is not refreshed/removed on refreshing the window
## Conditions:
Maximum limit of characters in a task = 30 
            
*****************************************************************************
## Technical Details...
Project phase: Frontend, Local Storage

Tools used: HTML, CSS, Javascript, React.JS

Data: Dynamically entered by the user through input section --
      Data will be stored in Local Storage
      
Root file: "public/index.html"

Styling files: Present in "src/stylesheets/"  --

               1. index.css -- to style the Home component
               2. style001.css -- to style the Main001 component -- for individual To Do designs

Rendering file: "src/index.js" -- Renders the templates from Virtual DOM to Actual DOM

React components: Present in "src/components/" --

                  1. Home.js: a. It nests all other main components of individual To Do designs
                              b. Parents: App.js
                              c. Children: Main001.js             
                  2. Main001.js: a. It nests the sub-components for 001 to do designs
                                 b. Parents: Home.js
                                 c. Children: Tasks.js
                  3. Tasks.js: a. It returns all individual task boxes
                               b. Parents: Main001.js
                               c. Children: None
Hooks: useState, useEffect
*******************************************************************


![To Do List](https://user-images.githubusercontent.com/39863626/221977857-611f62ae-02ef-4d94-b3fd-0814b7f9eed1.png)


