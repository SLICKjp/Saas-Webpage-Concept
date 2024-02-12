import Faqdata from './Faqdata';
import './faq.css';
const Faq = () => {

    const accordionData = [
    {
        id: 1,
        title: "How does the contact management feature help me keep track of clients and partners?",
        content: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics."
    },
    {
        id: 2,
        title: "Is the app available on all devices?",
        content: "Yes it is available on all devices."
    },
    {
        id: 3,
        title: "Can I collaborate with my team in real-time using all tools?",
        content: "Yes"
    },
];
  
   
    return (
        <section className="accordion">
            <div className="container-sm">
                <h3 className='accordion-heading'>Frequently Asked Questions</h3>
            {accordionData.map(({ title, content,id }) => (
          <Faqdata key={id} title={title} content={content} />
        ))}
            </div>
        </section>
    )
}

export default Faq