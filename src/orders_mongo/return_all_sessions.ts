import { MongoClient } from 'mongodb';
import { URI2, dbs, cols } from '../mongo';

export const return_all_sessions = async () => {
    let client = new MongoClient(URI2);
    let db = await client.db(dbs.timelogger);
    let col = await db.collection(cols.openSessions);

    let result = await col.find({}).toArray();

    return result;
};
