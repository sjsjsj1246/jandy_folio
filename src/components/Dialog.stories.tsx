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
import Dialog, { DialogProps } from "./Dialog";

export default {
  title: "components/Dialog",
  component: Dialog,
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta;

export const dialog = () => {
  const title = text("title", "카드");
  const subTitle = text("subTitle", "subTitle");
  const description = text("description", "description");
  const visible = boolean("visible", true);
  return (
    <Dialog
      visible={visible}
      title={title}
      subTitle={subTitle}
      description={description}
    />
  );
};
dialog.story = {
  name: "Default",
};
