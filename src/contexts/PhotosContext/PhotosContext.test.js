import { mount } from "enzyme";
import React from "react";
import { PhotosProvider } from "./PhotosContext";

describe("PhotosContext", () => {
  it("Should have empty photos list by default", () => {
    const wrapper = mount(<PhotosProvider />);
    expect(wrapper.state().photos).toEqual([]);
  });

  it("Should properly update photos after fetching", async () => {
    const wrapper = mount(<PhotosProvider />);
    await wrapper.instance().fetchPhotos();
    const { photos } = wrapper.state();

    expect(photos).toMatchSnapshot();
  });
});
