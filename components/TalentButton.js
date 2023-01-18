import styles from '@/styles/TalentButon.module.css'
import { useState, useEffect, memo } from "react";
import useTotalStore from "./../components/store";

function TalentButton({ rowsArray, incRows, decRows, talent, total, increase, decrease, name }) {

    const totalAll = useTotalStore((state) => state.totalAll);
    const addTotal = useTotalStore((state) => state.addTotal);

    const [style, setStyle] = useState("talent");
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

    const decrement = () => {
        const highestIndex = rowsArray.findLastIndex((e) => e > 0)
        const highestTotal = highestIndex * 5;
        const totalsArray = rowsArray.slice(0, highestIndex + 1);
        const totalAdded = totalsArray.reduce((t, n) => t + n);

        console.log(highestTotal)
        console.log(totalAdded)
        console.log(talent.row.num)


        if (count > 0 && talent.row.num === highestIndex) {
            setCount(c => c - 1);
            decrease(total);
            decRows(talent.row.name);
            addTotal()
        } else if (count > 0 && totalAdded > highestTotal) {
            setCount(c => c - 1);
            decrease(total);
            decRows(talent.row.name);
            addTotal()
        }
    }

    useEffect(() => {
        if (total >= talent.pointsreq && talent.depend === undefined) {
            talent.available = true;
        }
        if (total < talent.pointsreq) {
            talent.available = false;
        }
    });

    useEffect(() => {
        if (count === max) {
            if (talent.dependency) {
                talent.dependency(true);
            }
            return setStyle("talent complete")
        }
        if (count < max && talent.available) {
            if (talent.dependency) {
                talent.dependency(false);
            }
            return setStyle("talent available")
        }
        if (talent.available === false) {
            if (talent.dependency) {
                talent.dependency(false);
            }
            return setStyle("talent")
        }
    }, [count, max, talent.available, name, total, talent]);

    useEffect(() => {
        if (total === 0) {
            setCount(0)
        }
    }, [total]);

    return (
        <button
            tooltip={talent.tooltip}
            className={style}
            id={talent.id}
            onClick={increment}
            onContextMenu={(e) => {
                e.preventDefault()
                decrement()
            }}
        ><p>{count}/{max}</p>
        </button>
    )
}

export default memo(TalentButton);