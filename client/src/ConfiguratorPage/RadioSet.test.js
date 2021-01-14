import React from "react";
import { render } from "@testing-library/react";
import { RadioSet } from "./RadioSet";

describe("RadioSet", () => {
  it("renders correctly", () => {
    const text = "Test";
    const name = "Test";
    const values = [
      { id: "id1", slug: "slug1", name: "name1" },
      { id: "id2", slug: "slug2", name: "name2" },
      { id: "id3", slug: "slug3", name: "name3" },
    ];

    const { getByText } = render(
      <RadioSet text={text} name={name} values={values} />
    );
    expect(getByText(`Choose ${text}:`)).toBeInTheDocument();
    expect(getByText("name1")).toBeInTheDocument();
    expect(getByText("name2")).toBeInTheDocument();
    expect(getByText("name3")).toBeInTheDocument();
  });
});
