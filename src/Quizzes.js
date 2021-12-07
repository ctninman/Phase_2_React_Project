import CapitalQuiz from "./CapitalQuiz"
import ContinentQuiz from "./ContinentQuiz"
import FlagQuiz from "./FlagQuiz"
import PopulationQuiz from "./PopulationQuiz"


function Quizzes () {
  return (
    <div>
      <h1>Quizzes</h1>
      <ContinentQuiz />
      <CapitalQuiz />
      <PopulationQuiz />
      <FlagQuiz />
    </div>
  )
}

export default Quizzes