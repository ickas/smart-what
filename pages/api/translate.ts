import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import translator from '../../utils/translator.mjs';

/**
 * Uses AXIOS to unmarshal a URL and get its source and will attempt to translate it
 *
 * 200 OK {parsedSource: string, contractSource: string}
 * 400 NOK {message: string, error?: string}
 */
async function post(req: NextApiRequest, res: NextApiResponse) {
  if (!req?.body?.url)
    return res.status(400).json({message: `missing 'url' on body`});

  try {
    const contractSource = await axios.get<string>(new URL(req.body.url).toString()).then(({data}) => data);
    console.log('source!', contractSource);

    const parsedSource = translator(contractSource);

    console.log('parsed', parsedSource);

    return res.status(200).json({parsedSource, contractSource});


  } catch (e: any) {
    return res.status(400).json({message: 'error unmarshalling provided url', error: e?.message || e?.toString()})
  }
}


export default async function Translate(req: NextApiRequest, res: NextApiResponse) {
  switch (req?.method?.toLowerCase()) {
    case "post":
      await post(req, res);
      break;
    default:
      res.status(405);
  }

  res.end();
}
