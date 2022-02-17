import Atoms from 'Components/Atoms';
import Molecules from 'Components/Molecules';

const App = (): JSX.Element => {
  return (
    <Atoms.Div>
      <Atoms.Span>Hello World!!</Atoms.Span>
      <Molecules.Select />
    </Atoms.Div>
  );
};

export default App;
