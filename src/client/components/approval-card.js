import React from 'react'
import { Modal, Button} from 'react-bootstrap';
const ApprovalCard = () => {
  return (
    <Modal.Dialog>
    <Modal.Header closeButton>
        <Modal.Title>Continue?</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>Are you sure you want to continue?</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
    </Modal.Footer>
    </Modal.Dialog>
  )
}

export default ApprovalCard;
