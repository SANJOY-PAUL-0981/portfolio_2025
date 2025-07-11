import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className="hidden sm:block lg:w-[40vw] lg:h-[60vh] sm:w-[50vw] sm:h-[50vh] pointer-events-none">
      <Spline scene="https://prod.spline.design/4BcwOXWwjxYlPncU/scene.splinecode" />
    </div>
  );
}
