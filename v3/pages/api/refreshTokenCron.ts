import type { NextApiRequest, NextApiResponse } from 'next';
import client from '~lib/httpClient';
import { AxiosResponse } from 'axios';
import { IG_API_URL } from '~lib/constants';
import { getToken, updateToken } from '~db/index';

interface Resp {
  success: boolean;
  refershed: boolean;
  rest?: string;
  error?: Error | undefined;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>,
) {
  const IG_TOKEN: any = (await getToken()).data();

  try {
    const shouldIt = await shouldRefreshToken(IG_TOKEN);
    console.log('should refresh?', shouldIt);
    if (shouldIt[0]) {
      const refreshedToken = await refreshToken(IG_TOKEN.token);

      console.log('got the refreshed token', refreshedToken.expires_in);

      await updateToken({
        token: refreshedToken.access_token,
        expriresIn: refreshedToken.expires_in,
        createdAt: String(Date.now()),
      });

      console.log('updated token on Firestore');
      res.status(200).json({ success: true, refershed: true });
    } else
      res
        .status(200)
        .json({ success: true, refershed: false, rest: `${shouldIt[1]} hours` });

    console.log('respone sent back...');
  } catch (error: any) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ success: false, error, refershed: false });
  }
}

const shouldRefreshToken = async (
  tokenData: any,
): Promise<[boolean, number]> => {
  // get createdAt, expiresIn timestamp
  const { expiresIn, createdAt }: any = tokenData;
  const rest =
    (expiresIn - Math.floor((Date.now() - Number(createdAt)) / 1000)) / 60 / 60;
  return [rest < 48 ? true : false, rest];
};

const refreshToken = async (token: string) => {
  const resp: AxiosResponse = await client.get(
    `${IG_API_URL}/refresh_access_token`,
    {
      params: {
        grant_type: 'ig_refresh_token',
        access_token: token,
      },
    },
  );
  return resp.data;
};
