async function cmdHelper(srr: string) {
    const arr = srr.split(' ');
    const prosces = Bun.spawn({
        cmd: arr,
        stdout: 'inherit',
        stderr: 'inherit',
    });

    await prosces.exited;
}

async function runner() {
    const cmd1 = `docker container stop tl-cont`;
    const cmd2 = `docker container remove tl-cont`;
    const cmd3 = `docker image rm tl-img`;
    const cmd4 = `docker build -t tl-img .`;
    const cmd5 = `docker run --name=tl-cont -d tl-img`;

    await cmdHelper(cmd1);
    await cmdHelper(cmd2);
    await cmdHelper(cmd3);
    await cmdHelper(cmd4);
    await cmdHelper(cmd5);
}

runner();
