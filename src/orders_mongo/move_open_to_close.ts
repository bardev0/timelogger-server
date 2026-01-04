// przenies sesje
//
// znajdz sesje w otwartych sesjach
// skopiuj dane, wez id, usun z otwartych, dodaj do zamknietych
//
import { MongoClient, ObjectId } from 'mongodb';
import { URI2, dbs, cols, tlerrors } from '../mongo';

// TODO -> add strict type
export const move_open_to_close = async () => {
    let client = new MongoClient(URI2);
    let db = await client.db(dbs.timelogger);
    let col = await db.collection(cols.openSessions);
    let seshToMove = await col.findOne();

    /// dodaj czas zamkniecia sesji
    let timeOfClosing = new Date();
    let id = seshToMove?._id;

    if (id == null) {
        return {
            error: tlerrors.currentlyNoOpenSesh,
        };
    } else {
        let objToInsert = {
            seshStartTime: 'greg',
            seshCloseTine: timeOfClosing,
            idStartowejTEMP: id,
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
