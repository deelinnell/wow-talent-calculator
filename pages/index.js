import Head from 'next/head'
import styles from './../styles/Home.module.css'
import { useReducer, useState } from "react";
import TalentContainer from "./../components/TalentContainer";
import useTotalStore from "./../components/store";
import { paHoly, paProt, paRet } from "./../talents/paladin.js";
import { mgArc, mgFire, mgFrst } from "./../talents/mage.js";

const classes = {
  mage: 'mage',
  paladin: 'paladin'
}

export default function Home() {

  const [navColor, setNavColor] = useState(styles.pa);

  const total1 = useTotalStore((state) => state.total1);
  const total2 = useTotalStore((state) => state.total2);
  const total3 = useTotalStore((state) => state.total3);
  const remove1 = useTotalStore((state) => state.remove1);
  const remove2 = useTotalStore((state) => state.remove2);
  const remove3 = useTotalStore((state) => state.remove3);
  const increase1 = useTotalStore((state) => state.increase1);
  const increase2 = useTotalStore((state) => state.increase2);
  const increase3 = useTotalStore((state) => state.increase3);
  const decrease1 = useTotalStore((state) => state.decrease1);
  const decrease2 = useTotalStore((state) => state.decrease2);
  const decrease3 = useTotalStore((state) => state.decrease3);
  const addTotal = useTotalStore((state) => state.addTotal);

  function resetTotals() {
    remove1();
    remove2();
    remove3();
    addTotal();
  }


  function reducer(state, { type, payload }) {
    switch (type) {
      case classes.mage:
        setNavColor(styles.mg);
        return {
          name: 'Mage',
          img: styles.icon_mage,
          color: '#3fc7eb',
          spec_0: {
            bg: styles.bg_mage_arcane,
            icon: styles.icon_mage_arcane,
            name: 'Arcane',
            talents: mgArc,
            lines: []
          },
          spec_1: {
            bg: styles.bg_mage_fire,
            icon: styles.icon_mage_fire,
            name: 'Fire',
            talents: mgFire,
            lines: []
          },
          spec_2: {
            bg: styles.bg_mage_frost,
            icon: styles.icon_mage_frost,
            name: 'Frost',
            talents: mgFrst,
            lines: []
          }
        }
      case classes.paladin:
        setNavColor(styles.pa);
        return {
          name: 'Paladin',
          color: "palevioletred",
          img: styles.icon_paladin,
          spec_0: {
            bg: styles.bg_paladin_holy,
            icon: styles.icon_paladin_holy,
            name: 'Holy',
            talents: paHoly,
            lines: ["pa-0", "pa-1", "pa-2"],
          },
          spec_1: {
            bg: styles.bg_paladin_prot,
            icon: styles.icon_paladin_prot,
            name: 'Protection',
            talents: paProt,
            lines: ["pa-3", "pa-4", "pa-5", "pa-6"]
          },
          spec_2: {
            bg: styles.bg_paladin_ret,
            icon: styles.icon_paladin_ret,
            name: 'Retribution',
            talents: paRet,
            lines: ["pa-7", "pa-8"]
          }
        }
      default:
    }
  }

  const [current, dispatch] = useReducer(reducer, {
    name: 'Paladin',
    color: "palevioletred",
    img: styles.icon_paladin,
    spec_0: {
      bg: styles.bg_paladin_holy,
      icon: styles.icon_paladin_holy,
      name: 'Holy',
      talents: paHoly,
      lines: ["pa-0", "pa-1", "pa-2"],
    },
    spec_1: {
      bg: styles.bg_paladin_prot,
      icon: styles.icon_paladin_prot,
      name: 'Protection',
      talents: paProt,
      lines: ["pa-3", "pa-4", "pa-5", "pa-6"]
    },
    spec_2: {
      bg: styles.bg_paladin_ret,
      icon: styles.icon_paladin_ret,
      name: 'Retribution',
      talents: paRet,
      lines: ["pa-7", "pa-8"]
    }
  });

  const spec_0 = current.spec_0;
  const spec_1 = current.spec_1;
  const spec_2 = current.spec_2;

  return (
    <div className={styles.app}>
      <header>
        <div className={styles.nav_bar + ' ' + navColor}>
          <div className={styles.link_container + ' ' + styles.pa} onClick={() => {
            resetTotals();
            dispatch({ type: classes.paladin })
          }}>
            <div className={styles.link + ' ' + styles.pa}></div>
          </div>
          <div className={styles.link_container + ' ' + styles.mg} onClick={() => {
            resetTotals()
            dispatch({ type: classes.mage })
          }} >
            <div className={styles.link + ' ' + styles.mg}></div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div className={styles.img + ' ' + current.img}></div>
            <p className={styles.p_left} style={{ color: current.color, paddingTop: '10px' }}>{current.name}:</p>
            <div className={styles.header_distribution}>
              <p id={styles.specOneTtl}>{total1}</p>
              / <p id={styles.specTwoTtl}>{total2}</p>
              / <p id={styles.specThreeTtl}>{total3}</p>
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_reqlevel}>Required level: <p>{9 + total1 + total2 + total3}</p></div>
            <div className={styles.header_points}>Points left: <p>{71 - total1 - total2 - total3}</p></div>
          </div>
        </div>
      </header >
      <div className={styles.column_container}>
        <div className={styles.spec_column + ' ' + spec_0.bg}>
          <div className={styles.spec_header + ' ' + styles.one}>
            <div className={styles.img + ' ' + spec_0.icon}></div>
            <p className={styles.p_left}>{spec_0.name}</p>
            <p className={styles.p_right}>{total1} / 71</p>
          </div>
          <TalentContainer
            name={current.name}
            specName={spec_0.name}
            spec={spec_0.talents}
            total={total1}
            increase={increase1}
            decrease={decrease1}
            lines={spec_0.lines}>
          </TalentContainer>
          <div className={styles.spec_footer + ' ' + styles.one}>
            <button className={styles.resetbutton + ' ' + styles.one} onClick={() => { remove1(); addTotal() }}><p>✖</p>Reset</button>
          </div>
        </div>
        <div className={styles.spec_column + ' ' + spec_1.bg}>
          <div className={styles.spec_header + ' ' + styles.two}>
            <div className={styles.img + ' ' + spec_1.icon}></div>
            <p className={styles.p_left}>{spec_1.name}</p>
            <p className={styles.p_right}>{total2} / 71</p>
          </div>
          <TalentContainer
            name={current.name}
            specName={spec_1.name}
            spec={spec_1.talents}
            total={total2}
            increase={increase2}
            decrease={decrease2}
            lines={spec_1.lines}>
          </TalentContainer>
          <div className={styles.spec_footer + ' ' + styles.two}>
            <button className={styles.resetbutton + ' ' + styles.two} onClick={() => { remove2(); addTotal() }}><p>✖</p>Reset</button>
          </div>
        </div>
        <div className={styles.spec_column + ' ' + spec_2.bg}>
          <div className={styles.spec_header + ' ' + styles.three}>
            <div className={styles.img + ' ' + spec_2.icon}></div>
            <p className={styles.p_left}>{spec_2.name}</p>
            <p className={styles.p_right}>{total3} / 71</p>
          </div>
          <TalentContainer
            name={current.name}
            specName={spec_2.name}
            spec={spec_2.talents}
            total={total3}
            increase={increase3}
            decrease={decrease3}
            lines={spec_2.lines}>
          </TalentContainer>
          <div className={styles.spec_footer + ' ' + styles.three}>
            <button className={styles.resetbutton + ' ' + styles.three} onClick={() => { remove3(); addTotal() }}><p>✖</p>Reset</button>
          </div>
        </div>
      </div>
    </div >
  )
}