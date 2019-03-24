import React from "react";
import PhotosContext from "./PhotosContext";
import ThemeContext from "./ThemeContext";

function ContextConsumer({ children }) {
  return (
    <PhotosContext.Consumer>
      {photos => (
        <ThemeContext.Consumer>
          {theme => children({ photos, theme })}
        </ThemeContext.Consumer>
      )}
    </PhotosContext.Consumer>
  );
}

export { ContextConsumer };
export { PhotosContext, ThemeContext };
