import { lazy, Suspense } from "react";

const LazyLoad = (importFunc) => {
  //   const LazyComponent = lazy(importFunc());
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc);
      }, 2000);
    });
  });

  // eslint-disable-next-line react/display-name
  return (props) => (
    <Suspense
      fallback={
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
