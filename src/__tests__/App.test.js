import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";
import mockAxios from "axios";
import youtube from "../api/youtube";


describe("App", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });
});

