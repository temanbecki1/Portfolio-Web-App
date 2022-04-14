import './index.scss';

const AnimatedLetters = ({ letterClass, stringArray, idx}) => {
  return (
    <span>
      {
        stringArray.map((letter, i) => (
          <span key={letter + i} className={`${letterClass} _${i + idx}`}>
            {letter}
          </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters;
