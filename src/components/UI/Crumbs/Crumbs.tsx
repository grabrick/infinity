import Link from 'next/link';
import m from './Crumbs.module.scss';
import arrowRight from '@/assets/icons/arrow-right.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { isVisible } from '@/assets/animation/animation';

const Crumbs = ({ firstPage, secondPage, secondPageTitle, ThirdPage, ThirdPageTitle }: any) => {
  return (
    <motion.div 
      className={m.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={3}
      variants={isVisible}
    >
      <Link  className={m.link} href={firstPage}>{firstPage === "/" && "Главная"}</Link>
      <Image src={arrowRight} alt='' />
      <Link className={ThirdPage ? m.link : m.activeLink} href={secondPage}>{secondPageTitle}</Link>
      {ThirdPage && (
        <>
          <Image src={arrowRight} alt='' />
          <Link className={m.activeLink} href={ThirdPage}>{ThirdPageTitle}</Link>
        </>
      )}
    </motion.div>
  )
}

export default Crumbs;