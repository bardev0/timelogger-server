export async function cmdHelper(srr: string) {
    const arr = srr.split(' ');
    const prosces = Bun.spawn({
        cmd: arr,
        stdout: 'inherit',
        stderr: 'inherit',
    });

    await prosces.exited;
}
