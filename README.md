# Day Planner

## Description

In this assignment, I was to create a simple scheduler that allowed a user to write daily events that they were to do during the work day and save it.  The hours would also be colored-coded depending on whether the hour was past, present, or future.  It was a particularly difficult project to work on, as it required to use jQuery to write the script for it, as well as, moment.js to show the date and time.  I relied heavily on the advice and instruction from my instructor for this assignment, as well as, having to utilize Google searches to figure out the ways to be able to accomplish this.  In doing so, I was able to understand how to create this project and create something along the same lines in the future.

Deployed Application: https://kjknudtson.github.io/DayPlanner/

## Usage

When a user opens the screen, they will see a heading that includes the current date and time that will continue to advance throughout the day and day-to-day.  Below, the user will see a row for each hour from 9AM through 5PM.  Each row consists of a blank space and a button to save that row's contents.  The rows will vary in color.  Gray if the hour has passed, red if it is the current hour, and green if the hour has not arrived yet.  The user can click on the blank space and enter whatever events they have during a given hour and, when finished, can click the save button to the immediate right of that space.  Once clicked, the page utilizes local storage to save the contents so that the user can look it up again, in the event that they must close their browser.
