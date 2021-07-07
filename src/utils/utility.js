/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */

export function getCurrentTime() {
  return new Date().getTime();
}

export function getResults(text, duration) {
  var graphObj = {};
  const strokes = text.length;
  const words = text.split(" ").length;
  text.split(" ").forEach((letter) => {
    if (graphObj.hasOwnProperty(letter)) {
      graphObj[letter] = graphObj[letter] + 1;
    } else {
      graphObj[letter] = 1;
    }
  });

  const wordsPerMinute = words / duration;
  const words5 = strokes / 5;
  const words5PerMinute = words5 / duration;

  return {
    strokes,
    words,
    graphObj,
    wordsPerMinute,
    words5,
    words5PerMinute,
  };
}

export const getPopupData = (
  title,
  body,
  showCancel,
  showSubmit,
  onCancel,
  onSubmit
) => {
  return {
    title,
    body,
    showCancel,
    showSubmit,
    onCancel,
    onSubmit,
  };
};
