import { readFileSync } from 'fs';

export async function cmdHelper(srr: string) {
    const arr = srr.split(' ');
    const prosces = Bun.spawn({
        cmd: arr,
        stdout: 'inherit',
        stderr: 'inherit',
    });

    await prosces.exited;
}

export function getVersion(packageJsonPath = 'package.json'): string {
    const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return pkg.version;
}

export async function getExternalIp() {
    type IpResponse = {
        ip: string;
    };
    const res = await fetch('https://api.ipify.org?format=json');
    const data: IpResponse | any = await res.json();
    return data.ip;
}
