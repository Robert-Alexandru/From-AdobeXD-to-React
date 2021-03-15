import './App.css';
import React from 'react';
import Home from './components/home';
import Pull from './components/pull';
import Drag from './components/drag';
import Slide from './components/slide';
import Navigation from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from 'styled-components';


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
      font-size: 111.00px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Agency FB', Arial;
      white-space: pre;
      padding-top: 60px;
;`

class App extends React.Component {
	 render() {
		return (
			<div className="CustomWrapper">
				<Router>
								<Navigation />
								<Title>
									 <div>From AdobeXD to React</div>
								</Title>
							<div className="content">
								<Route render={({ location }) => (
									<Switch location={location}>
										<Route exact path="/" component={Home} />
										<Route path="/pull" component={Pull} />
										<Route path="/drag" component={Drag} />
										<Route path="/slide" component={Slide} />
									  {/*<Route path="/expandingcards" component={ExpandingCards} />
										<Route path="/drag" component={DragAnimations} />
                    <Route path="/loaders" component={InfiniteLoaders} />
                    <Route path="/carousels" component={Carousels} />	*/}		
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