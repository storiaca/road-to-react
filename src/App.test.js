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

  const handleRemoveItem = jest.fn();

  let component;

  beforeEach(() => {
    component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem} />
    );
  });
  it("renders all properties", () => {
    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );

    expect(
      component.root.findAllByProps({ children: "Jordan Walke" }).length
    ).toEqual(1);
  });

  it("calls onRemoveItem on button click", () => {
    component.root.findByType("button").props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });
});

describe("List", () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  it("renders two items", () => {
    const component = renderer.create(<List list={list} />);

    expect(component.root.findAllByType(Item).length).toEqual(2);
  });
});

describe("SearchForm", () => {
  const searchFormProps = {
    searchTerm: "React",
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
  };

  let component;

  beforeEach(() => {
    component = renderer.create(<SearchForm {...searchFormProps} />);
  });

  it("renders the input field with its value", () => {
    const value = component.root.findByType("input").props.value;
    expect(value).toEqual("React");
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
