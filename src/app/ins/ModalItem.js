import React from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'

function ModalItem() {
  const [open, setOpen] = React.useState(false)

  const redirect = () => {
    window.location.replace("/");
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>START EXAM</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='FINAL WARNING' />
      <ModalContent>
       <div>
      <h1>Welcome to the Exam!</h1>
      <p>
        Hello Student! Welcome to your exam. Before you begin, please make sure
        to read the instructions carefully.
      </p>
      <h2>Instructions:</h2>
      <ol>
        <li>Ensure you have a stable internet connection.</li>
        <li>Do not refresh the page during the exam.</li>
        <li>Answer all questions within the given time limit.</li>
        <li >
          Do not try to cheat or use internet or else your form will be terminated
        </li>
        <li>Review your answers before submitting.</li>
      </ol>
      <p>
        All the best! If you have any questions or encounter any issues during
        the exam, please raise your hand for assistance.

        YOUR TIMER WILL START AFTER YOU CLICK ON START BUTTON YOU CAN'T REVERSE IT
      </p>
    </div>
      </ModalContent>
      <ModalActions>
        <Button color='green' onClick={()=>redirect()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalItem