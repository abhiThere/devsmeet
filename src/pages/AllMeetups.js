import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import MeetupsContext from "../store/meetups-context";

function AllMeetupsPage() {
  const meetupsCtx = useContext(MeetupsContext);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupsCtx.meetups} />
    </section>
  );
}

export default AllMeetupsPage;
