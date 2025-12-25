import { log } from 'console';
import { MongoClient, Db } from 'mongodb';
import { appinfo } from './app_info';
let db: Db | null = null;

export let dbs = {
    timelogger: 'tl',
};

export let cols = {
    openSessions: 'open_sessions',
};

// TODO automagick
// TODO hostCheck ? portCheck ?
//
// add vars to create
//
let user = 'admin';
let password = 'password';
export let URI = `mongodb://${user}:${password}@${appinfo.mongo.cont_name}:27017/`;

export async function checkMongo() {
    const client = new MongoClient(URI);
    const adminDb = client.db().admin();
    const result = await adminDb.ping();

    return result.ok == 1 ? { mongo_good: true } : { mongo_good: false };
}
