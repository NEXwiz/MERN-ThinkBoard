import ratelimit from "../config/upstash.js";


const rateLimiter = async (req,res,next) =>{
    try {

        //per user rate limit, can't implement because no authentication
        //thus if one person crosses the limit, everyone else is also blocked
        const {success} = await ratelimit.limit("my-limit-key");

        if(!success) return res.status(429).json({message:"Too many requests, try again later."});

        next();
    } catch (error) {
        console.log("Rate limit error",error);

        next(error);
    }
}

export default rateLimiter;