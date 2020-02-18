import React from 'react'
import NewTweet from './NewTweet'
import Tweets from './Tweets'
class FeedController extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      masterTweets: []
    }
    this.addNewTweetToList = this.addNewTweetToList.bind(this)
  }
  addNewTweetToList(tweet){
    var newMasterTweets = this.state.masterTweets.slice()
    newMasterTweets.push(tweet)
    this.setState({masterTweets: newMasterTweets})
  }


  render(){

    return(
      <div>
        <NewTweet onNewTweetCreation={this.addNewTweetToList}/>
        {this.state.masterTweets.map((tweet, index) =>
          <Tweets content={tweet.tweet}
            likes={0}
            key={index}/>
        )}
      </div>
    )
  }
}

export default FeedController
