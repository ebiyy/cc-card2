import React, { useState } from "react";
import logo from "./logo.svg";
import { css, keyframes } from "@emotion/react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div css={StyleSheet.app}>
      <header css={StyleSheet.appHeader}>
        <img css={StyleSheet.appLogo} src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            css={StyleSheet.button}
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            css={StyleSheet.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            css={StyleSheet.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

function getPrefersReducedMotion() {
  const QUERY = "(prefers-reduced-motion: no-preference)";
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}

const prefersReducedMotion = getPrefersReducedMotion();

const appLogoSpin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const StyleSheet = {
  app: css({ textAlign: "center" }),
  appHeader: css({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }),
  appLogo: css({
    height: "40vmin",
    pointerEvents: "none",
    animation: prefersReducedMotion
      ? undefined
      : `${appLogoSpin} infinite 20s linear`,
  }),
  button: css({
    fontSize: "calc(10px + 2vmin)",
  }),
  appLink: css({
    color: "#61dafb",
  }),
};
