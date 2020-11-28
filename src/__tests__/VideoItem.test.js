import React from "react";
import { shallow } from "enzyme";
import VideoItem from "../components/VideoItem";

describe("VideoItem", () => {
  const props = {
    video: {
      snippet: {
        title: "title",
        thumbnails: {
          medium: "medium",
        },
      },
    },
    onVideoSelect: jest.fn(),
  };
  it("should render without throwing an error", () => {
    const wrapper = shallow(<VideoItem {...props} />);
    expect(wrapper).not.toBeNull();
  });
  it("should fire onClick handler", () => {
    const wrapper = shallow(<VideoItem {...props} />);
    const item = wrapper.find(".video-item.item");
    expect(props.onVideoSelect).toHaveBeenCalledTimes(0);
    item.simulate("click");
    expect(props.onVideoSelect).toHaveBeenCalledTimes(1);
  });
});
