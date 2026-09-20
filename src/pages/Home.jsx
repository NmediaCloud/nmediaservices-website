import React from "react";
import HomeDesktop from "./HomeDesktop";

/**
 * One responsive homepage.
 *
 * There used to be two: HomeDesktop above 768px and a separate HomeMobile
 * below it. Keeping them in step turned into a standing tax, and they drifted
 * anyway, most recently on the hero headline. HomeDesktop is already
 * responsive down to a phone, so it serves every width now.
 */
export default function Home() {
  return <HomeDesktop />;
}
