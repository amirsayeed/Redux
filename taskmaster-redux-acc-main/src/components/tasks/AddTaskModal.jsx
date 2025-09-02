import Modal from '../ui/Modal'

export default function AddTaskModal({isOpen,setIsOpen}) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming hero">
        <p className="mt-2 text-sm/6 ">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
          order.
        </p>
    </Modal>
  )
}
