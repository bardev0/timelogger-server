import { appinfo } from './src/app_info';

async function cmdHelper(srr: string) {
    const arr = srr.split(' ');
    const prosces = Bun.spawn({
        cmd: arr,
        stdout: 'inherit',
        stderr: 'inherit',
    });

    await prosces.exited;
}

// TODO
// add port bidings
async function createDockerfile() {
    await Bun.write(
        'Dockerfile',
        `

FROM ${appinfo.docker.image}:${appinfo.docker.version}

WORKDIR /app

# Copy dependency files first
COPY package.json ./

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
    const cmd1 = `docker container stop tl-cont`;
    const cmd2 = `docker container remove tl-cont`;
    const cmd3 = `docker image rm tl-img`;
    const cmd4 = `docker build -t tl-img .`;
    const cmd5 = `docker run --name=tl-cont -d tl-img`;

    await cmdHelper(cmd0);
    await createDockerfile();
    await cmdHelper(cmd1);
    await cmdHelper(cmd2);
    await cmdHelper(cmd3);
    await cmdHelper(cmd4);
    await cmdHelper(cmd5);
}

runner();
