import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('customDB');
    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let newCustom = await db.collection("customDBCollection").insertOne(bodyObject);
            console.log(newCustom);
            res.json(newCustom)
            // res.json(newCustom.ops[0]);
            break;
        case "GET":
            const customs = await db.collection("customDBCollection").find({}).toArray();
            res.json({ status: 200, data: customs });
            console.log(customs)
            break;
        default:
            break;
    }
}