import Player from "../../../models/player";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  const value = parseInt(req.query.value);
  const positions = req.query.positions;
  const contract = parseInt(req.query.contract);
  const minAge = parseInt(req.query.minage);
  const maxAge = parseInt(req.query.maxage);

  switch (method) {
    case "GET":
      try {
        const players = await Player.find({
          $and: [
            { ValueEUR: { $lte: value } },
            { Positions: { $regex: positions } },
            { ContractUntil: { $lte: contract } },
            { Age: { $gte: minAge, $lte: maxAge } },
          ],
        })
          .sort("-Overall")
          .limit()
          .skip(0);

        res.status(200).json({ success: true, data: players });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
