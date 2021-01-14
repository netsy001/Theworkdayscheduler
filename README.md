# Theworkdayscheduler
[Introduction](#Introduction)


[Prerequisites](#Prerequisites)

[Installation](#Installation)

[Summary](#Summary)

[Psuedo code](#Psuedo-code)

[Author](#Author)


## Introduction

The work day scheduler: AS part of the program this assignment is to use a HTML, CSS, Javascript, JQuery etc to program a scheduler to add events and store in a localStorage and show the scheduler with different colours of the past, present and future time.

## Prerequisites
To program and write code you need a text editor. Visual Studio Code is the best option to choose.

This assignment project has been delpoyed to Githubpages. To use this project, project link [Link to Github](https://github.com/netsy001/Theworkdayscheduler)

## Installation

To install the code you can clone it at github repository using github guidelines.

## Summary

This project includes four files:- 

`index.html` 

`script.js`

`style.css`

`README.md`

This four files include all the code and information of this assignment project.

## Psuedo code
### HTML
In the HTML div tags are used to seperate the time blocks.
textarea to get the input event for the time of the day.
button to add event on click and save the event for the day.

1. moment.js is used to get the time format which is most recomended for the best output to get time and date.
2. setInterval method to getTime functioned every second
3. ``.each``  time blocks as past present and future classes. Looping from each row.
4. Using ``parseInt`` function to parse a string and return as an integer.``this`` to get to object. .attr is used to get html data attribute ``data-hour`` of that block time.
5. ``loclStorage`` to get time block in which event is stored.
6. ``siblings`` method is used to get input event from textarea. As textarea is siblings of saveBtn.while ``parent`` is used as data-hour attribute is parent to saveBtn.

Execution: Open in browser

## Author
Surendra Choudary Nettam
