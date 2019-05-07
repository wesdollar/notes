import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/header";

const props = {
  text: "Test"
};

describe("happy path with default text", () => {
  const component = shallow(<Header />);

  it("renders header", () => {
    expect(component.find("h1")).toHaveLength(1);
  });

  it("renders header with default text", () => {
    expect(component.find("h1").text()).toEqual("Hello, World!");
  });
});

describe("when title prop is passed", () => {
  const component = shallow(<Header {...props} />);

  it("render with text from props", () => {
    expect(component.find("h1").text()).toEqual(props.text);
  });
});
