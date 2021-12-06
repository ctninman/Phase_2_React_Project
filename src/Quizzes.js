import CapitalQuiz from "./CapitalQuiz"
import ContinentQuiz from "./ContinentQuiz"
import PopulationQuiz from "./PopulationQuiz"


function Quizzes () {
  return (
    <div>
      <h1>Quizzes</h1>
      <ContinentQuiz />
      <CapitalQuiz />
      <PopulationQuiz />
    </div>
  )
}

export default Quizzes