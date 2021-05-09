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
import Icon, { IconProps } from "./Icon";

export default {
  title: "components/Icon",
  component: Icon,
  decorators: [withKnobs],
} as Meta;

export const icon = () => {
  const title = text("title", "카드");
  const size = radios(
    "size",
    { small: "small", medium: "medium", big: "big" },
    "medium"
  );
  const description = text("description", "description");
  const disableDes = boolean("disableDes", false);
  const imgUrl = text(
    "imgUrl",
    "https://i.postimg.cc/NLq5QnB1/React-js-logo-512.png"
  );
  return (
    <Icon
      title={title}
      size={size}
      description={description}
      disableDes={disableDes}
      imgUrl={imgUrl}
    />
  );
};
icon.story = {
  name: "Default",
};
