import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader)
            return res.status(401);
        
        const token = authHeader.split(' ')[1];
        const decode = jwt.verify(token, `${process.env.JWT_SECRET}`)
        
        req.decode = decode;
        next();

    } catch (err) {
        if(err.message === 'invalid token' || err.message === 'jwt malformed') {
            res.status(400).json({
                message: 'Authentication Failed'
            })
        } else {
            res.status(500).json({
                message: '500 Internal Server Error'
            })
        }
    }
}