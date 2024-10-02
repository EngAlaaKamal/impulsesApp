import { useState } from "react";

const Device = ({
  image,
  brand,
  model,
  type,
}: {
  image: string;
  brand: string;
  model: string;
  type: string;
}) => {
  const [deviceState, setDeviceState] = useState(true);

  return (
    <div
      className={`${
        deviceState
          ? "border-green"
          : type !== "dimming"
          ? `border-lightGray ${
              type === "lock" ? "" : "opacity-50 filter grayscale"
            }`
          : "border-green"
      } w-full h-full bg-lightGray rounded-lg border p-2 hover:scale-105 cursor-pointer transform transition-all duration-200 select-none`}
      onClick={() => setDeviceState(!deviceState)}
    >
      <div className="flex justify-between items-start pb-1">
        <div className="w-14 lg:w-16 h-10 lg:h-16 flex justify-center items-start">
          <img src={image} className="w-full h-[90%] p-1" />
        </div>
        {type === "switch" ? <img src="./images/devices/power.svg" /> : ""}
        {type === "dimming" ? (
          <input type="range" className="w-20 mt-3 slider-dimm" />
        ) : (
          ""
        )}
        {type === "lock" ? (
          deviceState ? (
            <p className="text-[10px] font-semibold text-firstMuted">Locked</p>
          ) : (
            <p className="text-[10px] font-semibold text-firstMuted">Unlock</p>
          )
        ) : (
          ""
        )}
      </div>
      <div className="text-third text-xs lg:text-base font-medium pt-2 md:pt-0">
        <div className="text-secondMuted">{brand}</div>
        {model}
      </div>
    </div>
  );
};

export default Device;
