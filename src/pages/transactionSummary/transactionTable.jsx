import React from 'react'
import Table from 'react-bootstrap/Table';
import FormInput from '../../components/common/formFields/formInput';
import InfiniteScroll from "react-infinite-scroll-component";

const TransactionTable = ({
  foundUsers, filterModalData, setFoundUsers, allActive, transactionData,
  filterNavClick, menuItems, active, filterItem, handleSearch, name
}) => {
  return (
    <>   
    <div className='d-flex align-items-center justify-content-between mb-3'>
      <div className='filter-nav'>
        <button type='button' className={`btn btn-link ${allActive ? "active" : ""}`} onClick={() => (setFoundUsers(transactionData), filterNavClick())}>All</button>
        {menuItems.map((Val, id) => {
          return (
            <button
            type='button'
              className={`btn btn-link ${active === Val ? "active" : ""}`}
              key={id} onClick={() => (filterItem(Val), filterNavClick(Val))}
            >
              {Val}
            </button>
          );
        })}
      </div>
      <div>
        <FormInput type="search" onChange={handleSearch} value={name} />
      </div>
    </div>

 <Table className="bg-white">
  <thead>
    <tr>
      <th> Date </th>
      <th> Order Id </th>
      <th> Account Name </th>
      <th> Paid for </th>
      <th> Fee Head </th>
      <th> Amount  </th>
      <th> Mode </th>
      <th> Status</th>
    </tr>
  </thead>
  <tbody>
  {foundUsers && foundUsers.length > 0 ? (
      foundUsers.map((transaction) => (
      <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>
        <button className='btn btn-link' onClick={() => filterModalData(transaction.orderId)}>{transaction.orderId}</button>
      </td>
      <td>{transaction.accountName}</td>
      <td>{transaction.paidFor}</td>
      <td>{transaction.feeHead}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.mode}</td>
      <td>
        <div className={`${transaction.status == 'paid' ? 'text-success': 'text-warning'}`}>{transaction.status}</div>
      </td>
    </tr>
   ))
   ) : (
     <tr>
        <td colSpan={8} className="text-center">
        No Record
      </td>
     </tr>
   )}
  </tbody>
</Table>
    </>
  );
}

export default TransactionTable;
