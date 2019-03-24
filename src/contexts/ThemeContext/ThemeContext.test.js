import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "./ThemeContext";

describe("ThemeContext", () => {
  it("Should have dark theme by default", () => {
    const wrapper = mount(<ThemeProvider />);
    const { theme } = wrapper.state();
    expect(theme).toEqual("dark");
  });

  it("Should properly toggle theme", () => {
    const wrapper = mount(<ThemeProvider />);

    expect(wrapper.state().theme).toEqual("dark");

    wrapper.instance().toggle();
    expect(wrapper.state().theme).toEqual("light");

    wrapper.instance().toggle();
    expect(wrapper.state().theme).toEqual("dark");
  });
});
