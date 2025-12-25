export async function cmdHelper(srr: string) {
    const arr = srr.split(' ');
    const prosces = Bun.spawn({
        cmd: arr,
        stdout: 'inherit',
        stderr: 'inherit',
    });

    await prosces.exited;
}

export async function getExternalIp() {
    type IpResponse = {
        ip: string;
    };
    const res = await fetch('https://api.ipify.org?format=json');
    const data: IpResponse | any = await res.json();
    return data.ip;
}
