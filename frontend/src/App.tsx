import './App.css'
import { HeaderContainer } from './app.styles';
import CandidatesList from "./pages/candidates-list/CandidatesList";

function App() {

  return (
    <>
      <HeaderContainer>
        <h1>Candidates List</h1>
      </HeaderContainer>
      <CandidatesList />
    </>
  )
}

export default App
