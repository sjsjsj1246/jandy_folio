/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Story, Meta } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
} from "@storybook/addon-knobs";
import Card, { CardProps } from "./Card";

export default {
  title: "components/Card",
  component: Card,
  decorators: [withKnobs],
} as Meta;

export const card = () => {
  const title = text("title", "카드");
  const tag = text("tag", "tag");
  const description = text("description", "카드 버튼");
  const radio = radios(
    "size",
    { small: "small", medium: "medium", big: "big" },
    "medium"
  );
  const imgUrl = "http://placeimg.com/640/480/any";
  const disableDes = boolean("disableDes", false);
  return (
    <Card
      title={title}
      tag={tag}
      description={description}
      size={radio}
      imgUrl={imgUrl}
      disableDes={disableDes}
    />
  );
};
card.story = {
  name: "Default",
};
