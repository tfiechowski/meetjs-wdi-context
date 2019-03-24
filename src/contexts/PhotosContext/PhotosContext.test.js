import { mount } from "enzyme";
import React from "react";
import { PhotosProvider } from "./PhotosContext";

describe("PhotosContext", () => {
  it("Should have empty photos list by default", () => {
    const wrapper = mount(<PhotosProvider />);
    expect(wrapper.state()).toEqual({ photos: [] });
  });
});
