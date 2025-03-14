import { useParams } from "react-router";

const ContestantDetails = () => {
  const { year, contestantId } = useParams();
  console.log(year, contestantId);
  
  return (
    <>
    <h1>Contestant Details</h1>
    </>
  );
};
export default ContestantDetails;