export type Tappinfo = {
    app_name: string;
    app_version: string;
    docker: {
        image: string;
        version: string;
        portContainer: number;
        portHost: number;
        image_name: string;
        cont_name: string;
    };
    mongo: {
        port: number;
        cont_name: string;
        version: string;
        logs: string;
        data: string;
        init_username: string;
        init_password: string;
    };
};

export const appinfo: Tappinfo = {
    app_name: 'Timelogger',
    app_version: '0.0.1',
    docker: {
        image: 'oven/bun',
        version: '1.3.5',
        portContainer: 14050,
        portHost: 14050,
        cont_name: 'tl-cont',
        image_name: 'tl-img',
    },
    mongo: {
        port: 12000,
        cont_name: 'tl-mongo',
        version: '8.2.3',
        logs: 'mongo_tl_logs',
        data: 'mongo_tl_data',
        init_password: 'password',
        init_username: 'admin',
    },
};
