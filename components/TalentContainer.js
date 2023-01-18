import styles from '@/styles/TalentContainer.module.css'
import { memo, useState, useEffect } from "react"
import TalentButton from "./TalentButton"

function TalentContainer({ spec, specName, lines, total, name, increase, decrease }) {

    const [rows, setRows] = useState({
        row0: 0,
        row1: 0,
        row2: 0,
        row3: 0,
        row4: 0,
        row5: 0,
        row6: 0,
        row7: 0,
        row8: 0,
        row9: 0,
        row10: 0,
    });

    const rowsArray = Object.values(rows);

    const incRows = (row) => {
        setRows(state => {
            return { ...state, [row]: rows[row] + 1 }
        });
    }
    const decRows = (row) => {
        setRows(state => {
            return { ...state, [row]: rows[row] - 1 }
        });
    }

    return (
        <div className={styles.talent_container}>
            {lines.map((value) => {
                return <div key={value} className="line" id={value}></div>
            })}
            {spec.map((value) => {
                return value.talent ? <TalentButton
                    key={specName + value.square}
                    rowsArray={rowsArray}
                    decRows={decRows}
                    incRows={incRows}
                    name={name}
                    total={total}
                    increase={increase}
                    decrease={decrease}
                    talent={value} />
                    :
                    <div
                        key={specName + value.square}
                        className={styles.empty} />
            })}
        </div>
    )
}

export default memo(TalentContainer);