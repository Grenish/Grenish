import styles from './style';

import { Navbar, Hero, Experience } from './Components';

const App = () => {
  return (
    <div className="bg-gainboro w-full overflow-hidden">
      <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default App