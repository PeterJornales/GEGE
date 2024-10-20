import { FunctionComponent, useCallback } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;

  /** Action props */
  onCalendarTextClick?: () => void;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  onCalendarTextClick,
}) => {
  const onImageClick = useCallback(() => {
    // Please sync "Slide 16:9 - 2" to the project
  }, []);

  const onSettingsTextClick = useCallback(() => {
    // Please sync "Settings" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "Slide 16:9 - 3" to the project
  }, []);

  return (
    <div className={`navigation ${className}`}>
      <img className="navigation-child" alt="" src="/rectangle-1.svg" />
      <img
        className="image-2-icon"
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
        onClick={onImageClick}
      />
      <div className="settings" onClick={onSettingsTextClick}>
        Settings
      </div>
      <img
        className="navigation-item"
        loading="lazy"
        alt=""
        src="/rectangle-2.svg"
      />
      <a className="home" onClick={onHomeTextClick} />
      <div className="calendar" onClick={onCalendarTextClick}>
        Calendar
      </div>
    </div>
  );
};

export default GroupComponent;
