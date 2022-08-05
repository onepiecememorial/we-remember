import { LanternContent, LanternContext } from '../types';
import { LanternText, LanternWrapper, LanternButton } from './styles';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';


const Lantern = ({ name, year, text, xPos, index }: Props) => {
  const [showModal, setShowModal] = useState(false);
  function toggleShowModal() {
    setShowModal(!showModal)
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name + " " + props.year}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            {props.text}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    <>
      <LanternButton onClick={toggleShowModal}>
        <LanternWrapper xPos={xPos} index={index}>
          <LanternText>{name}</LanternText>
          <LanternText>{year}</LanternText>
          <LanternText>{text}</LanternText>
        </LanternWrapper>
      </LanternButton>
      <div className="h-100 d-flex align-items-center justify-content-center">
          <MyVerticallyCenteredModal
          name={name}
          year={year}
          text={text}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export type Props = LanternContent & { index: number };

export default Lantern;
