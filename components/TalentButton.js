import styles from '@/styles/TalentButon.module.css'
import { useState, useEffect, memo } from "react";
import useTotalStore from "./../components/store";

function TalentButton({ rowsArray, incRows, decRows, talent, total, increase, decrease, name }) {

    const totalAll = useTotalStore((state) => state.totalAll);
    const addTotal = useTotalStore((state) => state.addTotal);

    const [style, setStyle] = useState(styles.talent);
    const [count, setCount] = useState();

    const max = talent.max;

    const increment = () => {
        if (count < max && total >= talent.pointsreq && totalAll < 71 && talent.depend === undefined) {
            setCount(state => state + 1);
            increase(total);
            incRows(talent.row.name);
            addTotal()
        }
    }

    const dec = () => {
        setCount(c => c - 1);
        decrease(total);
        decRows(talent.row.name);
        addTotal()
    }

    const decrement = (e) => {
        e.preventDefault()
        const highestIndex = rowsArray.findLastIndex((e) => e > 0)

        if (count > 0 && talent.row.num === highestIndex) {
            dec()
        } else if (count > 0 && (highestIndex) * 5 < (rowsArray.slice(0, highestIndex).reduce((t, n) => t + n)) && talent.row.num !== 0) {
            dec()

        } else if (talent.row.num === 0 && rowsArray[0] > 5) {
            dec()
        }
    }

    useEffect(() => {
        if (total >= talent.pointsreq && talent.depend === undefined) {
            talent.available = true;
        }
        if (total < talent.pointsreq) {
            talent.available = false;
        }
    }, [total]);

    useEffect(() => {
        if (count === max) {
            if (talent.dependency) {
                talent.dependency(true);
            }
            if (talent.line) {
                document.getElementById(talent.line).classList.remove('available')
                document.getElementById(talent.line).classList.add('complete')
            }
            return setStyle(styles.talent + ' ' + styles.complete)
        }
        if (count < max && talent.available) {
            if (talent.dependency) {
                talent.dependency(false);
            }
            if (talent.line) {
                document.getElementById(talent.line).classList.remove('unavailable')
                document.getElementById(talent.line).classList.add('available')
            }
            return setStyle(styles.talent + ' ' + styles.available)
        }
        if (talent.available === false) {
            if (talent.dependency) {
                talent.dependency(false);
            }
            if (talent.line) {
                document.getElementById(talent.line).classList.remove('available')
                document.getElementById(talent.line).classList.add('unavailable')
            }
            return setStyle(styles.talent)
        }
    }, [count, max, talent.available, name, total, talent]);

    useEffect(() => {
        if (total === 0) {
            setCount(0)
        }
    }, [total]);

    useEffect(() => {
        if (totalAll === 71 && talent.available === true && count < max) {
            return setStyle(styles.talent)
        } else if (totalAll < 71 && talent.available === true && count < max) {
            return setStyle(styles.talent + ' ' + styles.available)
        }
    }, [totalAll])

    return (
        <button
            tooltip={talent.tooltip}
            className={style}
            id={styles[talent.id]}
            onClick={increment}
            onContextMenu={(e) => decrement(e)}
        ><p>{count}/{max}</p>
        </button>
    )
}

export default memo(TalentButton);