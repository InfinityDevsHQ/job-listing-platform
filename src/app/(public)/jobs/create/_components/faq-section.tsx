import Hero from '@/app/(public)/companies/_components/hero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const Questions = [
    {
      question: 'Question 1',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 2',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 3',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 4',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 5',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 6',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 7',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
    {
      question: 'Question 8',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate rerum ipsa ullam.
  Consectetur quod vitae nam non tenetur aspernatur incidunt quia ipsa! Corrupti repudiandae
  impedit, qui culpa perspiciatis atque animi!`,
    },
  ];
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      <Hero heading="Search Your Questions" search />
      <h2 className="text-center text-base font-bold text-dark-nameWhite lg:text-4xl">
        Frequently asked questions.
      </h2>
      <Accordion type="single" className="w-full" collapsible>
        <div className="grid items-center gap-4 sm:grid-cols-2">
          {Questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={question.question}
              className="w-full border-dark-background3 bg-dark-primary text-dark-nameWhite"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </section>
  );
};
export default FAQSection;
