import type { NextApiRequest, NextApiResponse } from 'next'
import client from '~lib/httpClient';
import { AxiosResponse } from 'axios';
import { IG_API_URL } from '~lib/constants' 
import type { ArticleType } from "@types";
import { getToken } from '~db/index';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleType[] | { error: any }>
) {
    const IG_TOKEN: any = (await getToken()).data(); 
    try {
      const fields = 'id,caption,media_type,media_url';
      const resp: AxiosResponse = await client.get(`${IG_API_URL}/me/media`, {
          params:{
              access_token: IG_TOKEN.token,
              fields
          },
      });
      res.status(200).json(resp.data.data);
    } catch (error: any) {
      console.log('Next Error', error);
      res.status(error.status || 500).json({ error })
    }
    
}