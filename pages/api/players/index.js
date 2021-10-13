import Player from "../../../models/player";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const players = await Player.find({}).limit(5).skip(3);
        res.status(200).json({ success: true, data: players });

        // paginatedResults(Player);
        // res.json(res.paginatedResults);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    case "POST":
      try {
        const player = await Player.create(req.body);

        res.status(201).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
