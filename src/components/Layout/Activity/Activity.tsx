import Crumbs from "@/components/UI/Crumbs/Crumbs";
import m from "./Activity.module.scss";
import Header from "./Header/Header";
import folder from "@/assets/icons/folder-2.svg";
import lessons from "@/assets/icons/clipboard.svg";
import Image from "next/image";
import Folder from "./Folder/Folder";
import Lesson from "./Lesson/Lesson";
import { motion } from "framer-motion";
import { topToBottom } from "@/assets/animation/animation";

const Activity = () => {
  return (
    <section className={m.container}>
      <Crumbs
        firstPage={"/"}
        secondPage={"/activity"}
        secondPageTitle={"Активность"}
      />
      <Header />

      <motion.div 
        className={m.activity}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={topToBottom}
      >
        <div className={m.section}>
          <div className={m.titleWrapp}>
            <Image src={folder} alt="" />
            <h1 className={m.title}>Папки</h1>
          </div>
          <div className={m.folders}>
            {Array.from({ length: 6 }, (_, i) => (
              <Folder
                key={i}
                folderName={"Понидельник"}
                lessonsCount={5}
                id={i}
                createAt={`Был создан: ${"12.02.2024"}`}
              />
            ))}
          </div>
        </div>
        <div className={m.section}>
          <div className={m.titleWrapp}>
            <Image src={lessons} alt="" />
            <h1 className={m.title}>Уроки</h1>
          </div>
          <div className={m.lessons}>
            {Array.from({ length: 6 }, (_, i) => (
              <Lesson
                key={i}
                lessonName={"Quiz"}
                image={null}
                createAt={`Был создан: ${"12.02.2024"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Activity;
