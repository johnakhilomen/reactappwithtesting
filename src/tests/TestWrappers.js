import React from 'react';
import { shallow } from "enzyme";
import Toc from "../Toc";
import App from "../App";

export const createAppWrapper = () => {
    const appWrapper = shallow(<App></App>);
    return appWrapper;
  }

export let createTocWrapper = () =>{
    const tocWrapper = shallow(<Toc></Toc>);
    return tocWrapper;
}