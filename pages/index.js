import Head from 'next/head'
import styles from './../styles/Home.module.css'
import { useReducer } from "react";
import TalentContainer from "./../components/TalentContainer";
import useTotalStore from "./../components/store";
import { paHoly, paProt, paRet } from "./../talents/paladin.js";

const classes = {
  mage: 'mage',
  paladin: 'paladin'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case classes.mage:
      return {
        ...state, name: 'Mage',
        img: '/../public/static/images/mage.png',
        color: '#3fc7eb',
        spec_0: {
          img: '/../public/static/images/mage/arcane/MagicalSentry.png',
          column: 0,
          total: 0,
          name: 'Arcane',
          talents: mgArc,
          lines: []
        },
        spec_1: {
          img: '/../public/static/images/mage/fire/FireBolt02.png',
          column: 1,
          total: 0,
          name: 'Fire',
          talents: mgFire,
          lines: []
        },
        spec_2: {
          img: '/../public/static/images/mage/frost/FrostBolt02.png',
          column: 2,
          total: 0,
          name: 'Frost',
          talents: mgFrst,
          lines: []
        }
      }
    case classes.paladin:
      return {
        ...state, name: 'Paladin',
        img: '/../public/static/images/paladin.png',
        color: 'palevioletred',
        spec_0: {
          img: '/../public/static/images/holy/HealingLight.png',
          column: 0,
          total: 0,
          name: 'Holy',
          talents: paHoly,
          lines: ["pa-0", "pa-1", "pa-2"],
        },
        spec_1: {
          img: '/../public/static/images/prot/Devotion.png',
          column: 1,
          total: 0,
          name: 'Protection',
          talents: paProt,
          lines: ["pa-3", "pa-4", "pa-5", "pa-6"]
        },
        spec_2: {
          img: '/../public/static/images/ret/AuraOfLight.png',
          column: 2,
          total: 0,
          name: 'Retribution',
          talents: paRet,
          lines: ["pa-7", "pa-8"]
        }
      }
    default:
  }
}

export default function Home() {

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
  const removeTotal = useTotalStore((state) => state.removeTotal);

  const [current, dispatch] = useReducer(reducer, {
    name: 'Paladin',
    color: "palevioletred",
    img: '/../public/static/images/paladin.png',
    spec_0: {
      img: '/../public/static/images/holy/HealingLight.png',
      name: 'Holy',
      talents: paHoly,
      lines: ["pa-0", "pa-1", "pa-2"],
    },
    spec_1: {
      img: '/../public/static/images/prot/Devotion.png',
      name: 'Protection',
      talents: paProt,
      lines: ["pa-3", "pa-4", "pa-5", "pa-6"]
    },
    spec_2: {
      img: '/../public/static/images/ret/AuraOfLight.png',
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
        <div className={styles.nav_bar}>
          <div className={styles.link_container + ' ' + styles.pa} onClick={() => dispatch({ type: classes.paladin })}>
            <div className={styles.link + ' ' + styles.pa}></div>
          </div>
          <div className={styles.link_container + ' ' + styles.mg}>
            <div className={styles.link + ' ' + styles.mg}></div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div className={styles.img + ' ' + styles.icon_paladin}></div>
            <p className={styles.p_left} style={{ color: current.color, paddingTop: '10px' }}>{current.name}:</p>
            <div className={styles.header_distribution}>
              <p id={styles.specOneTtl}>{total1}</p>
              / <p id={styles.specTwoTtl}>{total2}</p>
              / <p id={styles.specThreeTtl}>{total3}</p>
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_reqlevel}>Required level: <p>{10 + total1 + total2 + total3}</p></div>
            <div className={styles.header_points}>Points left: <p>{71 - total1 - total2 - total3}</p></div>
          </div>
        </div>
      </header >
      <div className={styles.column_container}>
        <div className={styles.spec_column + ' ' + styles.one}>
          <div className={styles.spec_header + ' ' + styles.one}>
            <div className={styles.img + ' ' + styles.icon_holy}></div>
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
            <button className={styles.resetbutton + ' ' + styles.one} onClick={remove1}><p>✖</p>Reset</button>
          </div>
        </div>
        <div className={styles.spec_column + ' ' + styles.two}>
          <div className={styles.spec_header + ' ' + styles.two}>
            <div className={styles.img + ' ' + styles.icon_prot}></div>
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
            <button className={styles.resetbutton + ' ' + styles.two} onClick={remove2}><p>✖</p>Reset</button>
          </div>
        </div>
        <div className={styles.spec_column + ' ' + styles.three}>
          <div className={styles.spec_header + ' ' + styles.three}>
            <div className={styles.img + ' ' + styles.icon_ret}></div>
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
            <button className={styles.resetbutton + ' ' + styles.three} onClick={remove3}><p>✖</p>Reset</button>
          </div>
        </div>
      </div>
    </div >
  )
}