import React from 'react';
import ReactDOM from 'react-dom';
import OverviewFlow from './ExampleComponent';
import ExampleComponent from "./ExampleComponent";

const RetoolConnectedComponent = Retool.connectReactComponent(OverviewFlow);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);