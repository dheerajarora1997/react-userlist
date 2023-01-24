import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import CommonLayout from '../../components/common/layout/commonLayout';
import transactionData from './transaction.json';
import { useReactToPrint } from "react-to-print";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TransactionView from '../../components/transactionView';

import TransactionTable from './transactionTable';
import './index.scss'

const TransactionSummaryComponent = () => {

  const [modalTransactions, setModalTransactions] = useState("")
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState("");

  const fetchData = () => {
    setFoundUsers(transactionData)
  }

  useEffect(() => {
    fetchData()
  },[])

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const menuItems = [...new Set(transactionData.map((Val) => Val.status))];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filterModalData = (curcat) => {
    console.log("jack", curcat)
    const newItem = transactionData.filter((newVal) => {
      return newVal.orderId === curcat;
    });
    setModalTransactions(newItem);
    handleShow()
  };

  const handleSearch = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = transactionData.filter((user) => {
        return user.accountName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(transactionData);

    }
    setName(keyword);
  };

  const filterItem = (curcat) => {
    const newItem = transactionData.filter((newVal) => {
      return newVal.status === curcat;
    });
    setFoundUsers(newItem);
  };
  const [active, setActive] = useState('');
  const [allActive, setAllActive] = useState(true);

  const filterNavClick = (item) => {
    if (item !== active) {
      setAllActive()
      setActive(item);
    }
    else {
      setAllActive(true);
    }
  };

  useEffect(() => {
    document.title = 'Transaction Summary';
  }, [])


  // foundUsers.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   return 0;
  // })
  return (
    <>
      <CommonLayout pageHead={"Transaction Summary"}>
        <div className='transaction-view-blks'>
          <div className='row'>
            <div className='col-sm-3'>
              <TransactionView icon={"indian-rupee.png"} transactionKey={"Total Transaction"} transactionVal={"121000"} />
            </div>

            <div className='col-sm-3'>
              <TransactionView icon={"transaction.png"} transactionKey={"Transaction Count"} transactionVal={"8"} />
            </div>

            <div className='col-sm-3'>
              <TransactionView icon={"payment.png"} transactionKey={"Institute Paid to"} transactionVal={"2"} />
            </div>

            <div className='col-sm-3'>
              <TransactionView icon={"credit-card.png"} transactionKey={"Running Pay later Plan"} transactionVal={"3"} />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <div className='mb-2'>
            <h2 className='h5'>Transactions</h2>
          </div>


          <TransactionTable
          foundUsers={foundUsers}
          filterModalData={filterModalData}
          setFoundUsers={setFoundUsers}
          allActive={allActive}
          transactionData={transactionData}
          filterNavClick={filterNavClick}
          menuItems={menuItems}
          active={active}
          filterItem={filterItem}
          handleSearch={handleSearch}
          name={name}
          />

          <Modal scrollable={true} show={show} onHide={handleClose} name={modalTransactions.orderId} className="right" >
            <Modal.Header closeButton>
              <Modal.Title>Order Details: {modalTransactions[0] && modalTransactions[0].orderId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {modalTransactions[0] &&
                <div ref={componentRef}>
                  <div className='bg-white rounded shadow-sm p-3 d-flex justify-content-between'>
                    <div>
                      <div className='d-flex align-items-center'>
                        <span className='text-muted small'>Amount: </span>
                        <span className='h5 text-success m-0 ps-2'>{modalTransactions[0].amount}</span>
                      </div>

                      <div className='d-flex align-items-center mt-1'>
                        <span className='text-muted small'>Paid for: </span>
                        <span className='ps-2'>{modalTransactions[0].paidFor}</span>
                      </div>

                      <div className='d-flex align-items-center mt-1'>
                        <span className='text-muted small'>Fee Head: </span>
                        <span className='ps-2'>{modalTransactions[0].feeHead}</span>
                      </div>
                    </div>

                    <div className='w-25'>
                      <img src={`${require('../../assets/images/payment.png')}`} alt="" className='w-75' />
                    </div>
                  </div>

                  <div className='bg-white rounded shadow-sm p-3 mt-3'>

                    <div className='d-flex align-items-center'>
                      <span className='text-muted small'>Account Name: </span>
                      <span className='ps-2'>{modalTransactions[0].accountName}</span>
                    </div>

                    <div className='d-flex align-items-center mt-1'>
                      <span className='text-muted small'>Date: </span>
                      <span className='ps-2'>{modalTransactions[0].date}</span>
                    </div>

                    <div className='d-flex align-items-center mt-1'>
                      <span className='text-muted small'>Order Id: </span>
                      <span className='ps-2'>{modalTransactions[0].orderId}</span>
                    </div>

                    <div className='d-flex align-items-center mt-1'>
                      <span className='text-muted small'>Mode: </span>
                      <span className='ps-2'>{modalTransactions[0].mode}</span>
                    </div>

                    <div className='d-flex align-items-center mt-1'>
                      <span className='text-muted small'>Status: </span>
                      <span className='ps-2'>{modalTransactions[0].status}</span>
                    </div>
                  </div>
                </div>
              }
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handlePrint()}>
                Print PDF
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

        <div className='mt-5'>
          <div className='mb-2'>
            <h2 className='h5'>Apply for monthly no cost fee in a few simple steps</h2>
          </div>
          <TransactionView icon={"payment.png"} transactionKey={"Fee Planning - Monthly No Cost EMI"} transactionVal={"Complete your application and become eligible to recieve upto 10% cashback/rewards* and education insurance*"} transactionBtn={"Apply"} blkType={"type2"} />

        </div>
      </CommonLayout>
    </>
  );
}

export default TransactionSummaryComponent;
