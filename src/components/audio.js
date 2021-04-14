//Inspired by: https://reactjsexample.com/a-react-hook-for-playing-sound-effects/, https://blog.logrocket.com/rethinking-audio-feedback-usesound-hook/

import useSound from 'use-sound';
import TheGoldenBread from '../sounds/ytmp3free.cc_the-golden-bread-story-in-english-stories-for-teenagers-english-fairy-tales-youtubemp3free.org.mp3';
import * as React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

//Pause takes one parameter pause from useSound(implicitly from howler(library for handling web audio)). Returns a button with an onClick handler pause(), to set the state of the audio to pause.
const Pause = ({ pause }) => {
    return (
      <Button className="storyBtn" onClick={()=>pause()}><img alt="Pause"src="https://img.icons8.com/wired/64/000000/pause.png"/></Button>
    );
  };

//Play takes one parameter play from useSound(implicitly from howler(library for handling web audio)). Returns a button with an onClick handler play(), to set the state of the audio to play.
const Play = ({ play }) => {
    return (
      <Button className="storyBtn" onClick={play}><img alt="Play" src="https://img.icons8.com/wired/64/000000/play.png"/></Button>
    );
};

//Same as above for Pause. The difference here is that we have another mouse handler onMouseLeave(whenever the mouse exits the card the audio will pause). 
//We also define the whole card here so it can be used later in the Container, on the same Row and Column. 
//If we would have defined the second audio card as the first one at the end of the document React won't like that (see function AudioCards at the end).
const Pause2 = ({ pause }) => {
    return (
      <Button className="story2Btn" onMouseLeave={()=>pause()}>
              <Card className="audioCard" >
                  <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601930369i/55574165._SR1200,630_.jpg"/>
                  <Card.Body className="audiocardbody">
                      <Card.Title><h2>"The Golden Bread Story"</h2></Card.Title>
                      <Card.Subtitle><h5>Take your mouse away and I will pause the story for you!</h5></Card.Subtitle>
                  </Card.Body>
              </Card>
      </Button>
    );
  };

//Same as above for Play. The difference here is that we have another mouse handler onMouseEnter(whenever the mouse enters the card the audio will play).
//We also define the whole card here so it can be used later in the Container, on the same Row and Column. 
//If we would have defined the second audio card as the first one at the end of the document React won't like that (see function AudioCards at the end).
const Play2 = ({ play }) => {
    return (
      <Button className="story2Btn" onMouseEnter={()=>play()}>
              <Card className="audioCard" >
                  <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601930369i/55574165._SR1200,630_.jpg"/>
                  <Card.Body className="audiocardbody">
                      <Card.Title><h2>"The Golden Bread Story"</h2></Card.Title>
                      <Card.Subtitle><h5>Hover your mouse on top of me and I will play the story for you!</h5></Card.Subtitle>
                  </Card.Body>
              </Card>
      </Button>
    );
};

//Function defining the play, pause, isPlaying states using useSound library. useSound takes one argument representing the sound 'TheGoldenBread' imported at the top of the file from an mp3.
//Uses the custom functions Pause and Play, defined above.
//This function will be called below inside the first audio card giving it the needed functionality.
const TheGoldenBreadStory = () => {
    const [play, { pause, isPlaying }] = useSound(TheGoldenBread);
  return (
    <div>
      {isPlaying ? <Pause pause={pause} /> : <Play play={play} />}
    </div>
  );
};

//Function defining the play, pause, isPlaying states using useSound library. useSound takes one argument representing the sound 'TheGoldenBread' imported at the top of the file from an mp3.
//Uses the custom functions Pause2 and Play2, defined above.
//This function will be called after the first audio card. NOTE: the functions from inside this function have already defined the card object(see Pause2 and Play2 above).
//This is because React's bootstrap container does not allow defining two separate cards inside on Container within the same Row and Column.
//If you only want to use one card in the same React bootstrap Container, you can simply follow the instruction for the first card, replacing onClick with onMouseEnter/OnMouseLeave.
  const TheGoldenBreadStory2 = () => {
    const [play, { pause, isPlaying }] = useSound(TheGoldenBread);
  
    return (
      <div>
        {isPlaying ? <Pause2 pause={pause} /> : <Play2 play={play} />}
      </div>
    );
  };

  function AudioCards(){
      return(
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
            <a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/audio.js"><h2>Code Here</h2></a>
                <Card className="audioCard">
                    <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601930369i/55574165._SR1200,630_.jpg"/>
                    <Card.Body className="audiocardbody">
                        <Card.Title><h2>"The Golden Bread Story"</h2></Card.Title>
                        <Card.Subtitle><h5>Click the button and enjoy the story!</h5></Card.Subtitle>
                    </Card.Body>
                    <TheGoldenBreadStory/>
                </Card>
                <TheGoldenBreadStory2/>
            </Col>
          </Row> 
        </Container>
      )
  }

  export default AudioCards;