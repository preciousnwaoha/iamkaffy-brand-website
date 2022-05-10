import cookie from "cookie"


const storeCookie = (req, res) => {
    // req.body.token

    res.setHeader("Set-Cookie", cookie.serialize("collection", req.body.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "None",
        path: "/",
    }))

    res.statusCode = 200;
    res.json({success: true})

}

export default storeCookie