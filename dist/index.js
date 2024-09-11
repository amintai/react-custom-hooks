'use strict';

var react = require('react');

/**
 * useWorker hook
 *
 * @param {Object} options
 * @return {Boolean} isContentVisible - Boolean flag
 */
const useIntersectionObserver = ({ options }) => {
  const containerRef = react.useRef(null);
  const [isContentVisible, setContentVisible] = react.useState(false);

  //! Callback function of IntersectionObserver Function
  const callbackFunction = (element) => {
    const [entry] = element;
    setContentVisible(entry.isIntersecting);
  };

  react.useEffect(() => {
    //! Initialize IntersectionObserver and pass a callback function and options
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [{ containerRef, isContentVisible }];
};

// usage

// function App() {
//  const options = {
//    root: null,
//    rootMargin: '0px',
//    threshold: 1.0,
//  };
//
//  const [{ containerRef, isContentVisible }] = useIntersectionObserver({ options });

//   return (
//      <div
//        ref={containerRef}
//     >
//    {isContentVisible ?  <div>Load Only When it's visible in viewport Text</div> : null}
//     </div>
//   )
// }

exports.useIntersectionObserver = useIntersectionObserver;
//# sourceMappingURL=index.js.map
