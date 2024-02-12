/* eslint-disable react/no-unescaped-entities */
import Card from "./Card";
import { cards } from "./Cards"
import "./testimonials.css"
const Testimonials = () => {
    console.log(cards);
    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <h2 className="testimonials-title">Don't just take our word for it,see the success stories from businesses just like yours.</h2>
                    <div className="testimonials-card-container">
                        {cards.map(item => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="card-container">
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    author={item.author}
                                    organization={item.organization}
                                />
                              </div>
                            );
                        })}
                        </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials