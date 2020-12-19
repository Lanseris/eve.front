import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMissions } from "../services/missions";
import {Button, Row, Col} from 'react-bootstrap';

//РАЗОБРАТЬСЯ (и в том, что такое Export и в том, что внутри)
export default () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    GetMissions(dispatch);
  }, []);

  return missions.map((e) => 
  <div stylr={{ marginBottom: "1rem" }}>
      <ListRow mission={e}/>
  </div>);
};

//Описания вида строки списка
const ListRow = ({ mission }) => {
  return (
    <div>
      <Row>
        <Col>{mission.name}</Col>
        <Col>{mission.description}</Col>
        <Button variand="warning">Edit</Button>
      </Row>
      <hr />
    </div>
  );
};
