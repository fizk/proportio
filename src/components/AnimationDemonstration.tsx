import React, { useState, useRef } from "react";

interface Props {
    cubicPoint: [number, number, number, number]
}

export default function AnimationDemonstration ({cubicPoint}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const controlRef = useRef<HTMLDivElement | null>(null);

    const [duration, setDuration] = useState<number>(800)
    const [isAnimation, setIsAnimation] = useState<boolean>(false)

    const handleAnimate = () => {
        if (isAnimation) {return;}

        setIsAnimation(true);
        ref.current?.animate([{
            transform: "translateX(500%)"
        }], {
            duration: duration,
            easing: `cubic-bezier(${cubicPoint.join(', ')})`,
            fill: "both",
            direction: "alternate",
        }).addEventListener('finish', () => {
            setTimeout(() => {
                ref.current?.getAnimations().forEach(animation => animation.cancel());
                controlRef.current?.getAnimations().forEach(animation => animation.cancel());
                setIsAnimation(false);
            }, 1000);
        });

        controlRef.current?.animate([{
            transform: "translateX(500%)"
        }], {
            duration: duration,
            easing: `linear`,
            fill: "both",
            direction: "alternate",
        });
    }

    return (
        <div className="cubic-demonstration">
            <div className="cubic-demonstration__duration">
                <input type="range" min={100} max={5000} value={duration} step={100}
                    onChange={event => setDuration(parseInt(event.currentTarget.value))} />
                    {duration}ms
            </div>

            <div className="cubic-demonstration__track">
                <div ref={ref} style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'red'}}></div>
            </div>
            <div className="cubic-demonstration__track">
                <div ref={controlRef} style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'red'}}></div>
            </div>

            <button onClick={handleAnimate} disabled={isAnimation}>
                play
            </button>
        </div>
    )
}
