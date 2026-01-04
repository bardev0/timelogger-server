import { appinfo } from './app_info';
import express from 'express';
import router from './router';

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(appinfo.docker.portContainer, () => {
    console.log(`Server is running on port ${appinfo.docker.portContainer}`);
});

// TODO
// there should be only one open session, after completion it should be moved to "closedSessions"
// [] create a function/ route that checks if theres an open sesh and return info into client with warning
// [] create a route that returns all closed sessions to client
// [*] create a function/ route that closes current open session and moves it into closed -> app done?
//
// [] find a way to copy current types to docker build
