import React from "react";
import { mount } from "enzyme";
import App from "../components/App";


describe("App", () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<App/>)
    expect(wrapper).not.toBeNull()
  })
});

