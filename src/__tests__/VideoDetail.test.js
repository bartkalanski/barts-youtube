import React from "react";
import { shallow } from "enzyme";
import VideoDetail from "../components/VideoDetail";

describe("VideoDetail", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<VideoDetail />);
    expect(wrapper).not.toBeNull();
  });
  it("should render video if it's available", () => {
    const props = {
      video: {
        id: {
          videoId: "id",
        },
        snippet: {
          title: "title",
        },
      },
    };

    const wrapper = shallow(<VideoDetail {...props} />);
    expect(wrapper).not.toBeNull();
  });
});
