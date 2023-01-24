import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.scss';

const ModalCommon = ({modalTransactions, handlePrint, show, handleClose, componentRef}) => {
  console.log("modalTransaction", modalTransactions)

  return (
    <Modal scrollable={true} show={show} onHide={handleClose} name={modalTransactions.orderId} className="right" >
    <Modal.Header closeButton>
      <Modal.Title>Order Details: {modalTransactions[0].orderId}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {modalTransactions[0] && 
   <div ref={componentRef} className="p-4" documentTitle="jack">
    <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
 
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   <div className='border bg-dark text-white'>{modalTransactions[0].accountName}</div>
   <div className='border'>{modalTransactions[0].date}</div>
   <div className='border'>{modalTransactions[0].orderId}</div>
   <div className='border'>{modalTransactions[0].status}</div>
   <div className='border'>{modalTransactions[0].mode}</div>
   <div className='border'>{modalTransactions[0].amount}</div>
   <div className='border'>{modalTransactions[0].paidFor}</div>
   <div className='border'>{modalTransactions[0].feeHead}</div>
   </div>
      }
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={() => handlePrint()}>
        Print PDF
      </Button>
    </Modal.Footer>
  </Modal>
    );
}

export default ModalCommon;

