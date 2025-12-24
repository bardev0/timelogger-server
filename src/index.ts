import { appinfo } from './app_info';

async function getExternalIp() {
    type IpResponse = {
        ip: string;
    };
    const res = await fetch('https://api.ipify.org?format=json');
    const data: IpResponse | any = await res.json();
    return data.ip;
}

const hw = {
    appname: appinfo.app_name,
    appversion: appinfo.app_version,
    externalIp: await getExternalIp(),
};

console.log(hw);

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(hw);
});

app.listen(appinfo.docker.portContainer, () => {
    console.log(`Server is running on port ${appinfo.docker.portContainer}`);
});
