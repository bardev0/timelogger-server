import { appinfo } from './app_info';
import express from 'express';
import router from './router';

const app = express();
app.use('/', router);

app.listen(appinfo.docker.portContainer, () => {
    console.log(`Server is running on port ${appinfo.docker.portContainer}`);
});
