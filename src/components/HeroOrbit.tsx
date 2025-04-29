import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotate,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  shouldOrbit?: boolean;
  shouldSpin?:boolean;
  spinDuration?: string;
  orbitDuration?: string
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div className={twMerge(shouldSpin === true && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${-rotate}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
