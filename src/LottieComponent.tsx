import Lottie2 from 'react-lottie';
import pinjump from './assets/pinjump.json';

export default function LottieComponent() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pinjump,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Lottie2
        options={defaultOptions}
        height={400}
        width={400}
      />
    </>
  );
}