import AskQuestionForm from '../components/AskQuestionForm';
import FAQ from '../components/FAQ';

const AskQuestion = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 px-4 lg:px-12">
      <AskQuestionForm />
      <FAQ />
    </main>
  );
};

export default AskQuestion;
