import React from "react";
import { useAppSelector } from "../../setup/app-hooks";
import { RootState } from "../../store";

type Props = {};

const Notification = (props: Props) => {
  const { error, message } = useAppSelector(
    (state: RootState) => state.notifications
  );

  return (
    <div className="mt-16">
      {error && <div className="bg-red-200 z-50 py-7 text-center">{error}</div>}

      {message && (
        <div className="bg-green-400 bg-opacity-50 py-7 text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default Notification;
