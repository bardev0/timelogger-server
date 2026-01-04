import fs from 'fs';

import { MongoClient, Db } from 'mongodb';
import { appinfo } from './app_info';
let db: Db | null = null;

export let dbs = {
    timelogger: 'tl',
};

export let cols = {
    openSessions: 'open_sessions',
    closedSessions: 'closed_sessions',
};

export let tlerrors = {
    currentlyNoOpenSesh: 'ERROR : no open session ',
};

// TODO automagick
// TODO hostCheck ? portCheck ?
// TODO add vars to check with appinfo
//
let user = 'admin';
let password = 'password';

const isDocker = fs.existsSync('/.dockerenv');

let URI;
if (isDocker) {
    URI = `mongodb://${user}:${password}@${appinfo.mongo.cont_name}:27017/`;
} else {
    URI = `mongodb://${user}:${password}@localhost:${appinfo.mongo.port}/`;
}

export let URI2 = URI;

export async function checkMongo() {
    const client = new MongoClient(URI2);
    const adminDb = client.db().admin();
    const result = await adminDb.ping();

    return result.ok == 1 ? { mongo_good: true } : { mongo_good: false };
}
