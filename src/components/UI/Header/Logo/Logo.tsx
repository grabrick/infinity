import Link from 'next/link';
import m from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href={"/"} className={m.logoContainer}>
      <div className={m.logoBackground}>
        <div className={m.logo} />
      </div>
      <div className={m.titleWrapper}>
        <h1 className={m.title}>Infinity</h1>
        <span className={m.subTitle}>Качество и надежность</span>
      </div>
    </Link>
  );
};

export default Logo;