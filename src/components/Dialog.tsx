/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Fragment, MouseEventHandler } from "react";
import { useTransition, animated } from "react-spring";

export type DialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Dialog = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: DialogProps) => {
  const fadeTransition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, {
    from: {
      transform: `scale(0.5)`,
      opacity: 0,
    },
    enter: {
      transform: `scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `scale(0.5)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Fragment>
      {fadeTransition((style, item) =>
        item ? (
          <animated.div
            css={[fullscreen, darkLayer]}
            style={style}
          ></animated.div>
        ) : null
      )}

      {slideUpTransition((style, item) =>
        item ? (
          <animated.div css={[fullscreen, whiteBoxWrapper]} style={style}>
            <div css={whiteBox} onClick={handleClick}>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
              {children}
              {!hideButtons && <h1>hi</h1>}
            </div>
          </animated.div>
        ) : null
      )}
    </Fragment>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

export default Dialog;
