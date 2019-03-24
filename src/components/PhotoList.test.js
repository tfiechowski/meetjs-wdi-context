import { shallow } from "enzyme";
import React from "react";
import PhotosList from "./PhotoList";

describe("Components", () => {
  describe("PhotosList", () => {
    it("Renders the list", () => {
      const photos = [
        { id: 37, title: "Back in Black" },
        { id: 42, title: "Highway to Hell" }
      ];

      const wrapper = shallow(<PhotosList photos={photos} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
