export type Tappinfo = {
    app_version: string;
    docker: {
        image: string;
        version: string;
        portContainer: number;
        portHost: number;
    };
};

export const appinfo: Tappinfo = {
    app_version: '0.0.1',
    docker: {
        image: 'oven/bun',
        version: '1.3.5',
        portContainer: 14050,
        portHost: 3450,
    },
};
