import { Box } from "../components/redbox";
import GameVariables from "../game_var";

const MoveBox = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  const { payload } = input.find(x => x.name === "onMouseDown") || {};
  const current_boxID = GameVariables.box_id;
  if (payload) {

    entities[`box_${current_boxID}`] = {
        x: 0,
        y: 0,
        renderer: <Box />
    }
    const box = entities[`box_${current_boxID}`];

    box.x = payload.pageX;
    box.y = payload.pageY;
    GameVariables.box_id++;
  }

  return entities;
};

export { MoveBox };