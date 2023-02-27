import { Router } from "express";
import { getTweets, getUserTweets, postTweet } from "../controllers/tweet.controller.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", postTweet)
.get('/tweets/:username', getUserTweets)
.get('/tweets', getTweets);

export {tweetRouter};