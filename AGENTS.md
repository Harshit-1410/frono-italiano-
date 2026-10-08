

## Application rules
- Keep restaurant contact settings in src/config.ts and menu catalog in src/data/menu.ts so owners can replace content centrally.
- Cart state is shared through a root provider and persisted in localStorage because the requested cart must survive reloads.
- Place guest orders through a validated server function that calculates catalog prices; never trust client totals or expose customer records publicly.
- Staff order reads and updates require authenticated server functions and a protected user_roles admin assignment; never grant roles from a signup or browser value.
- Keep semantic brand styling in src/styles.css and use the shared Button component for controls so the restaurant design remains consistent.
