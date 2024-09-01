# Game Store

## Project Structure

```bash
game-store
└── src
    ├── components
    │   ├── ui
    │   │   ├── Header
    │   │   │   ├── Header.js
    │   │   │   ├── Header.scss
    │   │   │   └── Navbar
    │   │   │       ├── Navbar.js
    │   │   │       └── Navbar.scss
    │   │   │
    │   │   └── Footer
    │   │       ├── Footer.js
    │   │       └── Footer.scss
    │   │
    │   └── layout
    │       └── MainLayout
    │           ├── MainLayout.js
    │           └── MainLayout.scss
    │
    ├── pages
    │   ├── Home
    │   │   ├── Home.js
    │   │   └── Home.scss
    │   │
    │   ├── About
    │   │   ├── About.js
    │   │   └── About.scss
    │   │
    │   ├── Blogs
    │   │   ├── Blogs.js
    │   │   └── Blogs.scss
    │   │
    │   └── Contact
    │       ├── Contact.js
    │       └── Contact.scss
    │
    ├── games
    │   ├── TicTacToe
    │   │   ├── TicTacToe.js
    │   │   └── TicTacToe.scss
    │   │
    │   ├── CodeCraft
    │   │   ├── Components
    │   │   │   ├── GameArea
    │   │   │   │   ├── GameArea.js
    │   │   │   │   └── GameArea.scss
    │   │   │   │
    │   │   │   └── GameControls
    │   │   │       ├── GameControls.js
    │   │   │       └── GameControls.scss
    │   │   │
    │   │   ├── CodeCraft.js
    │   │   └── CodeCraft.scss
    │   │
    │   ├── TheWarrior
    │   │   ├── Components
    │   │   │   ├── Character
    │   │   │   │   ├── CharacterStats.js
    │   │   │   │   ├── CharacterActions.js
    │   │   │   │   └── Character.scss
    │   │   │   │
    │   │   │   ├── Combat
    │   │   │   │   ├── Battle.js
    │   │   │   │   ├── Enemy.js
    │   │   │   │   └── Combat.scss
    │   │   │   │
    │   │   │   ├── GameWorld
    │   │   │   │   ├── Map.js
    │   │   │   │   ├── Location.js
    │   │   │   │   └── GameWorld.scss
    │   │   │   │
    │   │   │   ├── Inventory
    │   │   │   │   ├── Inventory.js
    │   │   │   │   ├── Item.js
    │   │   │   │   └── Inventory.scss
    │   │   │   │
    │   │   │   ├── Quest
    │   │   │   │   ├── QuestLog.js
    │   │   │   │   ├── QuestItem.js
    │   │   │   │   └── Quest.scss
    │   │   │   │
    │   │   │   └── HUD
    │   │   │       ├── HUD.js
    │   │   │       ├── MiniMap.js
    │   │   │       └── HUD.scss
    |   │   │
    │   │   ├── pages
    │   │   │   ├── CommonComponents
    │   │   │   │   ├── BackButton.js
    │   │   │   ├── StartMenu
    │   │   │   │   ├── StartMenu.js
    │   │   │   │   └── StartMenu.scss
    │   │   │   │
    │   │   │   ├── MainArena
    │   │   │   │   ├── MainArena.js
    │   │   │   │   └── MainArena.scss
    │   │   │
    │   │   ├── TheWarrior.js
    │   │   └── TheWarrior.scss
    │   │
    │   ├── TakeOver
    │   │   ├── Components
    │   │   │   ├── Towers
    │   │   │   │   ├── Towers.js
    │   │   │   │   └── Towers.scss
    │   │   │   │
    │   │   │   ├── Maps
    │   │   │   │   ├── Maps.js
    │   │   │   │   └── Maps.scss
    │   │   │   │
    │   │   │   ├── Roads
    │   │   │   │   ├── Roads.js
    │   │   │   │   └── Roads.scss
    │   │   │   │
    │   │   │   ├── GameBoard
    │   │   │   │   ├── GameBoard.js
    │   │   │   │   └── GameBoard.scss
    │   │   │   │
    │   │   │   ├── PopulationDisplay
    │   │   │   │   ├── PopulationDisplay.js
    │   │   │   │   └── PopulationDisplay.scss
    │   │   │   │
    │   │   │   ├── AI
    │   │   │   │   ├── AI.js
    │   │   │   │   └── strategies.js
    │   │   │   │
    │   │   │   ├── GameManager
    │   │   │   │   ├── GameManager.js
    │   │   │   │   └── GameManager.scss
    │   │   │   │
    │   │   │   ├── GameSetup
    │   │   │   │   ├── GameSetup.js
    │   │   │   │   └── GameSetup.scss
    │   │   │   │
    │   │   │   ├── GameArena
    │   │   │   │   ├── GameArena.js
    │   │   │   │   └── GameArena.scss
    │   │   │   │
    │   │   │   ├── StartMenu
    │   │   │   │   ├── StartMenu.js
    │   │   │   │   └── StartMenu.scss
    │   │   │   │
    │   │   │   └── CommonComponents
    │   │   │       ├── BackButton
    |   │   │       |  ├── BackButton.js
    │   │   │       |  └── BackButton.scss
    │   │   │
    │   │   ├── TakeOver.js
    │   │   └── TakeOver.scss
    │   │
    ├── router
    │   ├── AppRouter.js
    │   └── routes.js
    │
    ├── redux
    │   ├── layout
    │   │   ├── actions.js
    │   │   ├── reducer.js
    │   │   ├── selectors.js
    │   │   └── types.js
    │   │
    │   ├── TheWarrior
    │   │   ├── actions.js
    │   │   ├── reducer.js
    │   │   ├── types.js
    │   │   └── selectors.js
    │   ├── rootReducer.js
    │   └── store.js
    │
    ├── constants
    │   └── gameConstants.js
    │
    ├── helpers
    │   ├── utils.js
    │   └── helpers.js
    │
    ├── styles
    │   ├── global.scss
    │   └── variables.scss
    │
    ├── assets
    │   └── Assets.js
    │
    ├── App.css
    ├── App.js
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js

```
