import Player from "../../../models/player";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        colsole.log(id);
        const player = await Player.findbyId(id);

        if (!player) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const player = await Player.findByIdAndUpdate(ID, req.body, {
          new: true,
          runValidators: true,
        });

        if (!player) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedPlayer = await Player.deleteOne({ ID: ID });

        if (!deletedPlayer) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
