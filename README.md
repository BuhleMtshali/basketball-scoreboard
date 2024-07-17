# Basketball Scoreboard

## Overview

This project is a web-based basketball scoreboard application. It allows users to track scores for two teams: Home and Guest.

## Features

- **Score Tracking**: Increment scores by 1, 2, or 3 points.
- **Save and Display Previous Scores**: Keep track of up to three previous scores for each team.
- **Reset Functionality**: Reset scores to zero and clear saved scores.
- **Responsive Design**: Adaptable layout for different screen sizes.

## Code Structure

- **HTML**: Sets up the structure of the scoreboard interface.
- **JavaScript**: Handles score updates, saving scores, and resetting.
- **CSS**: Styles the scoreboard for a visually appealing and responsive design.

## Files

- **index.html**: Main HTML file for structure.
- **index.js**: JavaScript file for functionality.
- **style.css**: CSS file for styling.
- **images/pexels-catiamatos-1045534.jpg**: Background image for the page.

## JavaScript Functions

- `saveHomeScore(event)`: Saves the current home score.
- `saveGuestScore(event)`: Saves the current guest score.
- `increment(event)`: Increases home score by 1 point.
- `incrementTwice(event)`: Increases home score by 2 points.
- `incrementThree(event)`: Increases home score by 3 points.
- `resetScoreHome(event)`: Resets the home score and previous scores.
- `incrementGuestOne(event)`: Increases guest score by 1 point.
- `incrementGuestTwo(event)`: Increases guest score by 2 points.
- `incrementGuestThree(event)`: Increases guest score by 3 points.
- `resetScoreGuest(event)`: Resets the guest score and previous scores.

## How to Use

1. **Open the HTML File**: Load `index.html` in a web browser.
2. **Increment Scores**: Use buttons to add points to either team.
3. **Save Scores**: Click "Save" to record the current score.
4. **Reset**: Click "RESET" to clear scores.

## Requirements

- A modern web browser supporting HTML5, CSS3, and JavaScript.

