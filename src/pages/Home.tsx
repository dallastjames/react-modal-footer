import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonFooter,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  let i = 1;
  const longdata = new Array(50)
    .fill(null)
    .map(() => ({ key: i++, value: "Content" }));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonModal isOpen={showModal}>
          <IonContent>
            {longdata.map((d) => (
              <p key={d.key}>{d.value}</p>
            ))}
          </IonContent>
          <IonFooter>
            <IonButton onClick={() => setShowModal(false)}>
              Close Modal
            </IonButton>
          </IonFooter>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
