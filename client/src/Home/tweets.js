import { TwitterTweetEmbed } from 'react-twitter-embed';
import { useEffect } from 'react';

const Tweets = (tweetIds) => {
    let tweetEmbeds = [];
    let tweetIdsArray = tweetIds.tweetIds
    for (let i=0; i<tweetIdsArray.length; i++){
        tweetEmbeds = tweetEmbeds.concat(<TwitterTweetEmbed tweetId={tweetIdsArray[i]} />);
    }

    useEffect(() => {
    }, [tweetIds.tweetIds]);

    return (
        <div>
            {tweetEmbeds}
        </div>
    );
}

export default Tweets;