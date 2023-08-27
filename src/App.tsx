import React from 'react';
import SubmitQuestion from './components/submit-question/SubmitQuestion';
import ResponseContainer from './components/response-container/ResponseContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ask about a social media event
        </h1>
      </header>
      <main>
        <SubmitQuestion />
        <ResponseContainer />
      </main>
    </div>
  );
}

export default App;
