## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# Zilch Game Plan

# HTML Elements

### Landing page
- Input element for player 1 name and label
- Input element for player 2 name and label
- Button to submit names and redirect

### Playfield
- 6 divs for each die
- Button to roll dice
- Button to bank dice
- Div to append player choice divs to 
- Table or divs to append turn score data and roll score data to
- Labels for score tables
- Headers for players of score tables

### Results Page
- h1 for game winner and loser
- Table with hard coded thead to append results data to
- Play Again button to clear local storage and redirect to landing page


# Initialize State
- Player 1 name
- Player 1 score
- Player 1 zilches
- Player 1 turn
- Player 2 name
- Player 2 score
- Player 2 zilches
- Player 2 turn

# We Need:
- Local Storage Utils
- HTML Skeleton
- CSS Skin, hair, nails, clothing
- Render Utils to render dice, scores, conditionally enabled buttons, etc

# Events
### Landing Page
- On button click...
    - Put name, score, and zilches into public storage
    - Redirect to playfield page

### Playfield Page
- On load...
    - Render scorecards, dice, roll and bank buttons
    - Disable bank button and enable roll button
- On Roll button click...
    - Check if it's the first roll or a reroll
    - Disable roll button if player hasn't taken points for that roll
    - All 6 dice display a random number between 1-6 
    - Ask if there are any combinations of scoring dice
        - If so, display score options which will be buttons
        - If not, score 500 and enable roll button for reroll
- On Choice button click
    - Add score to bank
    - Disable the related dice that have been held
    - Enable bank button if bank score is over 300
    - If there's no scoring dice left, enable roll button for free roll
- If reroll of Roll Button...
    - Check if any scoring die
        - If not, ZILCH. Change turn score to 0. And increase zilch count.
        - If zilch count === 3, subtract 500 points from user score.
    - If scoring die, show options etc.
- Bank button click...
    - Set zilch count to zero
    - Add bank score to player score
    - End player turn
    - Check if player has score 10,000 points
        - If so, next player gets one final turn to catch up. Display some kind of text relevant. 
        - On bank button of final round, award winner to highest scoring player and redirect to results page.

### Results Page
- On load, display game data
- On button click..
    - Clear local storage
    - Redirect to landing page

## Stretch
- Cool dice animations
- Refactoring code
- Sounds and images
- AI!!!