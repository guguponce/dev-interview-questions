import CustomIcon from "@/app/ui/components/CustomIcon";
import { TECHNOLOGIES_SUPPORTED } from "@/app/lib/data";
import React from "react";

export default function loading() {
  return (
    <div id="current-question-loading">
      {TECHNOLOGIES_SUPPORTED.map((name) => (
        <div className="techIconBox">
          <React.Fragment key={name}>
            <CustomIcon name={name} />
          </React.Fragment>
        </div>
      ))}
    </div>
  );
}
