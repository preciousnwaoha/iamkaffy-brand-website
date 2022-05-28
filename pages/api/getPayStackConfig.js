// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from "cookie"

const publicKey = process.env.PSK_PUB_KEY

export default function handler(req, res) {
    const preConfig = JSON.parse(req.body)
  const config = { publicKey, ...preConfig}

  return config
    
}
