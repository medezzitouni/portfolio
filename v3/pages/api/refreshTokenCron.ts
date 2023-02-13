import type { NextApiRequest, NextApiResponse } from 'next'
import client from '~lib/httpClient';
import { AxiosResponse } from 'axios';
import { IG_API_URL } from '~lib/constants' 
import type { ArticleType } from "@types";
import { getToken } from '~db/index';

interface Resp{
    success: boolean;
    refershed: boolean;
    rest?: string;
    error?: Error | undefined;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>
) {
    const IG_TOKEN: any = (await getToken()).data(); 

    try {
        const shouldIt = await shouldRefreshToken(IG_TOKEN);
        if(shouldIt[0]){
            refreshToken(IG_TOKEN.token);
            res.status(200).json({ success: true, refershed: true });
        }else 
            res.status(200).json({ success: true, refershed: false, rest: `${shouldIt[1]}h` });

    } catch (error: any) {
      console.log('Next Error', error);
      res.status(error.status || 500).json({ success: false, error, refershed: false });
    }
    
}

const shouldRefreshToken = async (tokenData: any): Promise<[boolean, number]> => {
    // get created_at, expiresIn timestamp
    const { expiresIn, created_at }: any = tokenData; 
    const rest = (expiresIn - Math.floor((Date.now() - Number(created_at)) / 1000)) / 60 / 60
    return [rest < 48 ? true : false, rest];

}

const refreshToken = async (token: string) => {
    
    const resp: AxiosResponse = await client.get(`${IG_API_URL}/refresh_access_token`, {
        params:{
            grant_type: 'ig_refresh_token',
            access_token: token
        },
    });
    return resp.data.data;
    
}