import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import "./GroupComponent1.css";

export type GroupComponent1Type = {
  className?: string;
  tTH130PM300PM?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onRectangleClick?: () => void;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  propLeft,
  propTop,
  onRectangleClick,
  propBackgroundColor,
  tTH130PM300PM,
}) => {
  const blogPostStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const onRectangleClick1 = useCallback(() => {
    // Please sync "Attendance Record" to the project
  }, []);

  return (
    <div className={`blog-post ${className}`} style={blogPostStyle}>
      <div className="image-placeholder" />
      <div
        className="blog-post-child"
        onClick={onRectangleClick}
        style={rectangleDivStyle}
      />
      <div className="itmc-113">ITMC 113</div>
      <div className="tth-130pm-">{tTH130PM300PM}</div>
      <div className="kevin-g-vega">Kevin G. Vega</div>
    </div>
  );
};

export default GroupComponent1;
