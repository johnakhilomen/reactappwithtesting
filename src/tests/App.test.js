import React from 'react';
import ErrorBoundary from "../ErrorBoundary";
import App from '../App';
import Header from "../Header";
import Toc from "../Toc";
import renderer from 'react-test-renderer';
import {shallow, mount} from "enzyme";
import ConfigureEnzymeAdapter from "./ConfigureEnzymeAdapter";
import {createAppWrapper} from "./TestWrappers";

//Configure Enzyme Adapter
ConfigureEnzymeAdapter.init();
const stringDotEmpty = "";
/**
 * @function createAppComponent
 */
const createAppComponent = () => {
  return renderer.create(<App></App>);
}
const appComponentTree = JSON.parse(JSON.stringify(createAppComponent()) );
//console.log(appComponentTree);

test("test that App renders without errors", ()=>{
  //expect(appComponentTree).toMatchSnapshot();
})

test("test to validata state for correctness", ()=> {
  const appState = createAppWrapper().state();
  expect(typeof(appState.pgTitle)).toBe(typeof(""));
  expect(typeof(appState.menu)).toBe(typeof([]));
})

test("test to invalidata pgTitle state for correctness", ()=> {
  const app = shallow(<App></App>);
  const appState = app.state();
  appState.pgTitle = 2;
  
  const appWrapperwithErrBoundary = shallow(<ErrorBoundary>{app}</ErrorBoundary>);
  appWrapperwithErrBoundary.simulateError(new TypeError('Invalid state object'));
  //expect(() => appWrapperwithErrBoundary.state()).toThrow("Invalid state object");
  const objError = appWrapperwithErrBoundary.state().error;
  expect(objError.toString()).toContain("Invalid state object");
  
})

appComponentTree.children[0].children.forEach(element => {
  //console.log(element);
});
test("test that App component renders main Div", ()=> {
/*let foundDiv = stringDotEmpty
Object.entries(appComponentTree).forEach(([k ,v])=> {
    if(k == "type" && v == "div")
    {
      foundDiv = "found";
      return;
    }
   });*/
  expect(appComponentTree.type).toBe("div");
})

test("test that App component doesn't render main Div", ()=> {
    expect(appComponentTree.type).not.toBe("");
  })


test("test that App component renders Header component", ()=> {
  const headerComponent =  createAppWrapper().find(Header);
  expect(headerComponent.length).toBe(1);
})

test("test that App component doesn't render Header component", ()=> {
  const headerComponent =  createAppWrapper().find(Header);
  expect(headerComponent.length).not.toBe(0);
})

test("test that App component renders Toc", ()=> {
  const TocComponent = createAppWrapper().find(Toc);
  expect(TocComponent.length).toBe(1);
})

test("test that App component doesn't render Toc", ()=> {
  const TocComponent = createAppWrapper().find(Toc);
  expect(TocComponent.length).not.toBe(0);
})

  
test("test that App component contains P", ()=> {
  const app = shallow(<App></App>);
  const countP = app.find("p");
  expect(countP.length).toBe(2);
})

test("test p content in App component", ()=> {
  const app = shallow(<App></App>);
  const p1 = app.find("[id='p1']");
  const p2 = app.find("[id='p2']");
  expect(p1.text()).toBe("This is App");
  expect(p2.text()).toBe("Another text");
})


  
/*test("set headerText state when button is clicked", ()=> {
  const button = appWrapper.find("[className='myButton']");
  button.simulate("click");
  const changeHeaderText =  appWrapper.find(Header);
  expect(changeHeaderText.props().headerText).toBe("New Header Text");
})*/
