import React from 'react';
import App from '../App';
import Header from "../Header";
import Toc from "../Toc";
import renderer from 'react-test-renderer';
import {shallow} from "enzyme";
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
  expect(appComponentTree).toMatchSnapshot();
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

/*test("set headerText state when button is clicked", ()=> {
  const button = appWrapper.find("[className='myButton']");
  button.simulate("click");
  const changeHeaderText =  appWrapper.find(Header);
  expect(changeHeaderText.props().headerText).toBe("New Header Text");
})*/
