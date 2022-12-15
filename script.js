// when I scroll to the li - I want it to trigger the anime function once
// when the li comes into view on the screen - run the function anime

const el = document.querySelector("li.project");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

isInViewport(el);

console.log(isInViewport);

anime({
  targets: "li.project",
  translateX: 2000,
  delay: 1000,
});

// document.getElementById("element").addEventListener("scroll", runTheFunc);

// const runTheFunct = () => {
//     const inView = isInViewport()
//   if (isInView) {
//      anime({})
