import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import App, { Item, List, SearchForm, InputWithLabel } from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Item", () => {
  const item = {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  };
  it("renders all properties", () => {
    const component = renderer.create(<Item item={item} />);
    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );

    expect(
      component.root.findAllByProps({ children: "Jordan Walke" }).length
    ).toEqual(1);
  });

  it("calls onRemoveItem on button click", () => {
    const handleRemoveItem = jest.fn();

    const component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem} />
    );
    component.root.findByType("button").props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });
});

// test suite
describe("something truthy", () => {
  // test case
  test("true to be true", () => {
    // test assertion
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    // test assertion
    expect(false).toBe(false);
  });
});
