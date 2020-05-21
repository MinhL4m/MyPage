import React, { useEffect } from 'react'
import { Vision } from './Vision'
import * as Rellax from 'rellax'

export const VisionContainer: React.FC<{}> = () => {
    useEffect(() => {
        var rellax1 = new Rellax('.rellax1', {
            speed: 1,
            center: true,
            round: true,
            vertical: true,
            horizontal: false
        });
        var rellax3 = new Rellax('.rellax3', {
            speed: 5,
            center: true,
            round: true,
            vertical: true,
            horizontal: false
        });
        return () => {
            rellax1.destroy()
            rellax3.destroy()
        }
    }, [])

    return (
        <>
            <Vision />
        </>
    );
}