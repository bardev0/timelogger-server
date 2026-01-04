import { appinfo } from './src/app_info';
import { cmdHelper } from './libs';
import { getVersion } from './libs';

// TODO
//
// wyciagnij wersje z package.json
//
//

let version = getVersion();

async function createDockerfile() {
    await Bun.write(
        'Dockerfile',
        `FROM ${appinfo.docker.image}:${appinfo.docker.version}

WORKDIR /app

# Copy dependency files first
COPY package.json ./

COPY timelogger-types /timelogger-types

WORKDIR /timelogger-types

RUN bun run build-types

WORKDIR /app

RUN bun add /timelogger-types

# Install dependencies
RUN bun install

# Copy app source
COPY . .

CMD ["bun", "run", "dev"]
`,
    );
}

async function runner() {
    const cmd0 = `rm -rf Dockerfile`;
    const cmd1 = `docker container stop ${appinfo.docker.cont_name}`;
    const cmd2 = `docker container remove ${appinfo.docker.cont_name}`;
    const cmd3 = `docker image rm ${appinfo.docker.image_name}`;
    const cmd35 =
        'rsync -a --exclude=".git" ../timelogger-types/ ./timelogger-types/';
    const cmd4 = `docker build -t ${appinfo.docker.image_name}:${version} .`;
    const cmd5 = `docker run --name=tl-cont -d -p${appinfo.docker.portHost}:${appinfo.docker.portContainer} --network ${appinfo.docker_network} tl-img:${version}`;
	const cmd6 = `rm -rf timelogger-types`

    await cmdHelper(cmd0);
    await createDockerfile();
    await cmdHelper(cmd1);
    await cmdHelper(cmd2);
    await cmdHelper(cmd3);
    await cmdHelper(cmd35);
    await cmdHelper(cmd4);
    await cmdHelper(cmd5);
	await cmdHelper(cmd6)
}

runner();
