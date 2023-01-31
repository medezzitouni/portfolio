import { NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

const COOKIE_AGE = 2 * 30 * 24 * 60 * 60; // 60 dAYS;

export default class JWTToken {
    static setup(){
        if(!JWTToken.getToken())
            // @ts-ignore
            JWTToken.store(process.env.NEXT_PUBLIC_IG_TOKEN)
    }
    static store(token: string) {
        // Set
        setCookie(null, 'token', token, {
            maxAge: COOKIE_AGE,
            path: process.env.NEXT_PUBLIC_APP_BASE_URL,
        });
    }
    static getToken(ctx: NextPageContext | null = null) {
        const cookies = parseCookies(ctx);
        const token = cookies['token'] ? 'Bearer ' + cookies['token'] : '';
        return token;
    }

    static removeToken() {
    destroyCookie(null, 'token');
    }
}
