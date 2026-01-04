// przenies sesje
//
// znajdz sesje w otwartych sesjach
// skopiuj dane, wez id, usun z otwartych, dodaj do zamknietych
//
import { MongoClient, ObjectId } from 'mongodb';
import { URI2, dbs, cols, tlerrors } from '../mongo';
import type { TfinilizedSesh, TnewSesh } from 'timielogger-types';

// TODO -> add strict type
export const move_open_to_close = async () => {
    let client = new MongoClient(URI2);
    let db = await client.db(dbs.timelogger);
    let col = await db.collection(cols.openSessions);

    let seshToMove = await col.findOne();
    let id = seshToMove?._id;

    function removeID(obj: any): TnewSesh {
        let temp = obj;
        delete temp._id;
        return temp;
    }

    let seshWithoutId: TnewSesh = removeID(seshToMove);
    console.log(seshWithoutId);
    if (id == null) {
        return {
            error: tlerrors.currentlyNoOpenSesh,
        };
    } else {
        // SPREAD PREV SES
        // REMOVE ID
        // ADD CLOSING TIME

        // ADD TYPE COMPLETION
        let objToInsert: TfinilizedSesh & TnewSesh = {
            dateStart: new Date(seshWithoutId.dateStart),
            user: seshWithoutId.user,
            client: seshWithoutId.client,
            dateClosed: new Date(),
        };

        let col2 = await db.collection(cols.closedSessions);
        let insert = await col2.insertOne(objToInsert);

        let deleteSesh = await col.deleteOne({ _id: new ObjectId(id) });

        console.log(seshToMove);

        return {
            insertResult: insert,
            deleteResult: deleteSesh,
        };
    }
};
//
//
