import React from "react";
import { shallow } from "enzyme";
import VideoList from "../components/VideoList";

describe("VideoList", () => {
  it("should render without throwing an error", () => {
    const props = {
      video: {
        id: {
          videoId: "id",
        },
        snippet: {
          title: "title",
        },
      },
      videos: [],
    };
    const wrapper = shallow(<VideoList {...props} />);
    //console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });
});
