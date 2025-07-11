import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className='lg:w-[40vw] lg:h-[60vh] h-[60vh] w-[100vw] pointer-events-none'>
      <Spline scene="https://prod.spline.design/4BcwOXWwjxYlPncU/scene.splinecode" />
    </div>
  );
}
