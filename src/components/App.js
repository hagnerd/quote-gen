import React, { Component } from "react";

import Quotes from "../data/quotes";

import Quote from "./Quote";
import Tweet from "./Tweet";
import Button from "./Button";
import Footer from "./Footer";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: Quotes,
      rndm: 0,
      tweetUrl: "",
    };
  }

  componentDidMount() {
    return this.setNewQuote();
  }

  setNewQuote = () => {
    const rndm = Math.floor(
      Math.random() * Math.floor(this.state.quotes.length)
    );

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(this.state.quotes[rndm].quote)}`;

    this.setState({
      rndm,
      tweetUrl,
    });
  }

  handleClickRandom = () => {
    return this.setNewQuote();
  }

  render() {

    const { quotes, rndm, tweetUrl } = this.state; 

    return (
      <div className="container">
        <div className="flex">
          <Quote 
            quote={quotes[rndm].quote}
            source={quotes[rndm].source}
            tweetUrl={tweetUrl}
          />
          <Tweet tweetUrl={tweetUrl} />
          <Button onClick={this.handleClickRandom} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
