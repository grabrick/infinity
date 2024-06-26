import Image from 'next/image';
import m from './Template.module.scss';

const Template = ({ title, image, desc, setIsPaused, isPaused, uniqueClassName }: any) => {
  
  return (
    <div
      className={`${m.container} ${m[`.item${uniqueClassName}`]}`}
      style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image width={45} height={45} src={image} alt='' />
      <div className={m.titleWrapper}>
        <h3 className={m.title}>{title}</h3>
        <p className={m.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default Template;