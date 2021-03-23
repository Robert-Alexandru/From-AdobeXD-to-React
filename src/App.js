import './App.css';
import React from 'react';
import Home from './components/home';
import Pull from './components/pull';
import Drag from './components/drag';
import Slide from './components/slide';
import Expandable from './components/expandable';
import Carousels from './components/carousels';
import Navigation from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from 'styled-components';
import AudioCards from './components/audio';


const Title = styled.div`
      box-sizing: content-box;
      -ms-transform-origin: center;
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
      cursor: default;
      text-align: center;
      letter-spacing: 0.5;
      color: black;
      font-size: 100px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Century Gothic';
      white-space: pre;`

class App extends React.Component {
	 render() {
		return (
			<div className="CustomWrapper">
				<Router>
								<Navigation />
								<Title >
									 <div>From AdobeXD to React</div>
								</Title>
							<div className="content">
								<Route render={({ location }) => (
									<Switch location={location}>
										<Route exact path="/" component={Home} />
										<Route path="/pull" component={Pull} />
										<Route path="/drag" component={Drag} />
										<Route path="/slide" component={Slide} />
										<Route path="/expandable" component={Expandable} />
										<Route path="/carousels" component={Carousels} />
										<Route path="/AudioCards" component={AudioCards} />	
									</Switch>
									)} />
							</div>
				</Router>
				<div className="push"></div>
				<div className="footer">Footer</div>
			 </div>
			)
		}
	}

export default App;