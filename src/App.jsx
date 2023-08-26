import { useState } from 'react';
import styles from './components/MagitEightBall.module.css';

const App = () => {
  const [question, setQuestion] = useState(''); // empty string is false aka falsy
  const [response, setResponse] = useState(''); // empty string is false aka falsy
  const [thinking, setThinking] = useState(false);

  const responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleResponse = () => {
    if (question.trim() !== '') {
      setResponse('')
      setThinking(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        setResponse(responses[randomIndex]);
        setThinking(false);
      }, 1500);
    }
  };

  return (
    <div className={styles.magicEightBallContainer}>
      <div className={styles.magicEightBall} onClick={handleResponse}>
        Ask
      </div>
      <input
        type='text'
        placeholder='Ask your question...'
        value={question}
        onChange={handleInputChange}
      />
      {thinking && <p>Pondering your question...</p>}
      {response && <p>{response}</p>}
    </div>
  );
};

export default App;
