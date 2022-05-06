import { MongoClient } from 'mongodb';

const uri = process.env.mongodbURI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
let client;
let clientPromise;

if (!process.env.mongodbURI) {
    throw new Error("not connected");
} else {
    console.log("connected")
}

if (process.env.mode === 'dev') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;