import React, {useState, useRef, useEffect} from 'react'
import './FadeInSection.css'

export default function FadeInSection(props) {
    const [isVisiable, setVisible] = useState(false);
    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setVisible(true);
            }
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

  return (
    <div ref={ domRef } className={`fade-in-section ${isVisiable ? 'is-visible' : ''}`}>
        {props.children}
    </div>
  )
}
