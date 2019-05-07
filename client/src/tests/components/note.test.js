import React from "react";
import { shallow } from "enzyme";
import Note from "../../components/note";

const props = {
  title: "Phish",
  body: "...take care of your shoes.",
  noteId: 555
};

// TODO: handleOnClick
// const handleClickSpy = jest.spyOn(Note.prototype, "handleOnClick");
const component = shallow(<Note {...props} />);

it("renders", () => {
  expect(component.find(".card")).toHaveLength(1);
});

it("renders title from props", () => {
  expect(component.find("h2").text()).toEqual(props.title);
});

it("renders body from props", () => {
  expect(component.find("p").text()).toEqual(props.body);
});

// it("handles onClick", () => {
//   component.find("button").simulate("click");
//   expect(handleClickSpy).toHaveBeeenCalled();
// });
