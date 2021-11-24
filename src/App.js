import { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import NewWindow from 'react-new-window'

function App() {
  const [newWindow, setNewWindow] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <button onClick={() => setNewWindow(!newWindow)}>{newWindow ? 'attach': 'detach'}</button>
      {newWindow ? (
        <NewWindow>
          <MentionsInput value={value} onChange={(e, newValue) => setValue(newValue)}>
            <Mention trigger="@" data={[]} />
          </MentionsInput>
        </NewWindow>
      ) : (
        <MentionsInput value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Mention trigger="@" data={[]} />
        </MentionsInput>
      )}
    </>
  );
}

export default App;
