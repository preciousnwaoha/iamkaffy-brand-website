// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import cookie from "cookie"

export default function handler(req, res) {;
  res.setHeader('set-cookie', [
    'cookie1=value1; SameSite=Lax',
    'cookie2=value2; SameSite=None; Secure',
  ]);

  // res.cookie('cookie2', 'value2', { httpOnly: true, sameSite: 'none', secure: true });

}
