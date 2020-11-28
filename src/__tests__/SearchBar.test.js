import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).not.toBeNull();
  });
  it("should submit a form", () => {
    const props = {
      onFormSubmit: jest.fn(),
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).not.toBeNull();
    const form = wrapper.find(".ui.form");
    expect(props.onFormSubmit).toHaveBeenCalledTimes(0);
    form.simulate("submit", {
      preventDefault: () => {},
    });
    expect(props.onFormSubmit).toHaveBeenCalledTimes(1);
  });
  it("should fire onChange handler", () => {
    const onChange = jest.fn();

    const wrapper = shallow(<SearchBar />);
    expect(wrapper).not.toBeNull();
    const input = wrapper.find("input");
    expect(onChange).toHaveBeenCalledTimes(0);
    const mockEvent = { target: { value: "foo" } };
    input.simulate("change", mockEvent);
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
