import { MongoClient } from 'mongodb';
import { URI2, dbs, cols } from '../mongo';

// TODO -> add strict type
export const write_new_sesh = async (sessionData: any) => {
    let client = new MongoClient(URI2);
    let db = await client.db(dbs.timelogger);
    let col = await db.collection(cols.openSessions);

    let result = await col.insertOne(sessionData);

    return result;
};
//
