# Splitter

A demo Angular 11 and PrimeNG 11 application that shows an unexpected behaviour when putting a table with
scrollHeight="flex" into a splitter panel.  This project has a splitter with two vertical panels.  The table is at the bottom and is intended for showing log events as the server generates them.  The upper panel is for doing other stuff.

## Expectations

The expectation is that the splitter panel sizes do not change automatically as the lower panel table grows in number of rows.  It should just grow to the splitter panel height and not more.

## Problem Seen

The problem is that as rows are added to the table, and when the table fills the original splitter panel height, it forces the splitter panel up and crowds out the upper panel.  Also, the table grows down outside the height of the lower splitter panel.

## Run the Development server to try it out

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

There is a timer that fills the table, showing the unintended behaviour.
