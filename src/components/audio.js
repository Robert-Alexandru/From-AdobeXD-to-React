//Inspired by: https://reactjsexample.com/a-react-hook-for-playing-sound-effects/, https://blog.logrocket.com/rethinking-audio-feedback-usesound-hook/

import useSound from 'use-sound';
import TheGoldenBread from '../sounds/ytmp3free.cc_the-golden-bread-story-in-english-stories-for-teenagers-english-fairy-tales-youtubemp3free.org.mp3';
import * as React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Pause = ({ pause }) => {
    return (
      <Button className="storyBtn" onClick={()=>pause()}><img alt="Pause"src="https://img.icons8.com/wired/64/000000/pause.png"/></Button>
    );
  };

const Play = ({ play }) => {
    return (
      <Button className="storyBtn" onClick={play}><img alt="Play" src="https://img.icons8.com/wired/64/000000/play.png"/></Button>
    );
};

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

const TheGoldenBreadStory = () => {
    const [play, { pause, isPlaying }] = useSound(TheGoldenBread);
  return (
    <div>
      {isPlaying ? <Pause pause={pause} /> : <Play play={play} />}
    </div>
  );
};


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