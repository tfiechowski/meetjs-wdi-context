import { mount } from "enzyme";
import React from "react";
import { PhotosProviderInner } from "./PhotosContext";

describe("PhotosContext", () => {
  const api = {
    fetchPhotos: () => [
      { id: 37, title: "Back in Black" },
      { id: 42, title: "Hells Bells" }
    ]
  };

  it("Should have empty photos list by default", () => {
    const wrapper = mount(<PhotosProviderInner api={api} />);
    expect(wrapper.state().photos).toEqual([]);
  });

  it("Should properly update photos after fetching", async () => {
    const wrapper = mount(<PhotosProviderInner api={api} />);
    await wrapper.instance().fetchPhotos();
    const { photos } = wrapper.state();

    expect(photos).toMatchSnapshot();
  });
});
