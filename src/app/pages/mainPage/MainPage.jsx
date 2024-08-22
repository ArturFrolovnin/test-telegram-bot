import "./MainPage.css";
import NavBar from "../../components/navbar/NavBar";
import VotingButton from "../../components/UI/button/VotingButton";
import VotingCards from "../../components/cards/VotingCards";

function mainPage() {
  return (
    <>
      <div className="container-main-page">
        <VotingCards />
        <VotingButton />
        <NavBar />
      </div>
      ;
    </>
  );
}

export default mainPage;
