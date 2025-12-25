import { cmdHelper } from './libs';
import os from 'os';
import path from 'path';
import { appinfo } from './src/app_info';

const mongoDataDir = path.join(os.homedir(), appinfo.mongo.data);
const mongoLogDir = path.join(os.homedir(), appinfo.mongo.logs);

console.log(mongoDataDir);
console.log(mongoLogDir);

async function runner() {
    const startMongo = [
        `docker run -d --name ${appinfo.mongo.cont_name}`,
        `-p ${appinfo.mongo.port}:27017`,
        `-v ${mongoDataDir}:/data/db`,
        `-v ${mongoLogDir}:/var/log/mongodb`,
        `--network ${appinfo.docker_network}`,
        `-e MONGO_INITDB_ROOT_USERNAME=${appinfo.mongo.init_username}`,
        `-e MONGO_INITDB_ROOT_PASSWORD=${appinfo.mongo.init_password}`,
        `mongo:${appinfo.mongo.version}`,
    ].join(' ');

    await cmdHelper(startMongo);
}

runner();
