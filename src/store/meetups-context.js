import React, { useState } from "react";

const MeetupsContext = React.createContext({
  meetups: [],
  addMeetup: (meetup) => {},
});

export const MeetupsContextProvider = (props) => {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      image: "https://miro.medium.com/max/1024/1*zV6JSvx76Gl6y9jMXdurjg.jpeg",
      title: "React Meetup",
      address: "Berlin, Germany",
      description:
        "Explore the React universe with us! Focusing on in-depth talks, career-boosting workshops, and networking opportunities, the React Day Berlin conference provides space for everyone to make friends and collaborate on stellar apps.",
      date: "Friday, December 2, 2022",
    },
    {
      id: "m2",
      image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
      title: "NextJS Meetup",
      address: "San Francisco, CA, US",
      description:
        "Join us for the NextJS Meetup discussing the brand new features introduced by the latest version of NextJS this year. Get to know how the latest NextJS release lays the foundations to be dynamic without limits and network with the active community. Excited to see you there!",
      date: "Monday, December 5, 2022",
    },
  ];

  const [meetups, setMeetups] = useState(DUMMY_MEETUPS);

  const addMeetupHandler = (meetup) => {
    setMeetups((prevMeetups) => {
      return prevMeetups.concat(meetup);
    });
  };

  const context = {
    meetups: meetups,
    addMeetup: addMeetupHandler,
  };

  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  );
};

export default MeetupsContext;
