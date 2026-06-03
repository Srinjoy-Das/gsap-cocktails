import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({

            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100,
        })
        .from('#c-right-leaf', {
            x: 100, y: 100,
        })

        
        const drinksTimeline = gsap.timeline({

            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top center',
                end: 'center center',
                scrub: true,
            }
        })

        drinksTimeline
        .from('#popularCocktails', {
            x: -200,
            opacity: 0,
            duration: 1,
        })
        .from('#lovedMocktails', {
            x: 200,
            opacity: 0,
            duration: 1,
        }, "<")
    })


    return( 
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf"/>
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf"/>


            <div className="list">
                <div className="popular" id="popularCocktails">
                    <h2>Most Popular Cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => {
                            return (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>

                                    <span>- {price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>


                <div className="loved" id="lovedMocktails">
                    <h2>Most Loved Mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => {
                            return (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>

                                    <span>- {price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Cocktails;