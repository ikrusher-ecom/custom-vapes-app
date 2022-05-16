import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('customDB');
    switch (req.method) {
        case "POST":
            try {
                const bodyObject = JSON.parse(req.body);
                const newCustom = await db.collection("customDBCollection").insertOne(bodyObject);
                res.status(200).json({ success: true, data: newCustom });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        case "GET":
            try {
                const customs = await db.collection("customDBCollection").find({}).toArray();
                res.status(200).json({ success: true, data: customs });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        case "DELETE":
            try {
                const custom = await db.collection("customDBCollection").deleteOne({ "_id": ObjectId(`${req.body._id}`) });
                if (!custom) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: custom });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            break;
    }
}