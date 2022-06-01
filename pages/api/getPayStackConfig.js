// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import cookie from "cookie"

const publicKey = process.env.PSK_PUB_KEY

export default function handler(req, res) {


  res.status(200).json(publicKey)
  return publicKey
    
}
