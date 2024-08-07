import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better way to  <br className="sm:block hidden" /> improve your grades using AI 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Enhance grading with AI by using diverse training data for accuracy, integrating multiple evaluation metrics, and continuously updating algorithms. Include human oversight for quality control and detailed feedback to users.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
