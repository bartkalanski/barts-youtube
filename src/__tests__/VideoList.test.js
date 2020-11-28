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
    expect(wrapper).not.toBeNull();
  });
  it("should render VideoItem if videos are provided", () => {
    const wrapper = shallow(
      <VideoList
        videos={[
          {
            id: { videoId: "videoId1" },
            snippet: { title: "title1" },
            thumbnails: { medium: "medium1" },
          },
          {
            id: { videoId: "videoId2" },
            snippet: { title: "title2" },
            thumbnails: { medium: "medium2" },
          },
          {
            id: { videoId: "videoId3" },
            snippet: { title: "title3" },
            thumbnails: { medium: "medium3" },
          },
          {
            id: { videoId: "videoId4" },
            snippet: { title: "title4" },
            thumbnails: { medium: "medium5" },
          },
          {
            id: { videoId: "videoId5" },
            snippet: { title: "title5" },
            thumbnails: { medium: "medium5" },
          },
        ]}
      />
    );
    expect(wrapper.find("VideoItem").length).toBe(5);
  });
});
