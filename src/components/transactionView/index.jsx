import React from 'react';
import './index.scss';

const TransactionView = ({icon, transactionKey, transactionVal, transactionBtn, blkType}) => {
  return <div className='transaction-view-blk border-primary bg-white border p-3 d-flex align-items-center'>
      <div className='tv-left'>
          <img src={require(`../../assets/images/${icon}`) } alt="" />
      </div>
      <div className='tv-right ps-3'>
        {blkType == 'type2' ?
        <>
        <div className='key h5'>{transactionKey}</div>
        <div className='val'>{transactionVal}</div>
        </>
        :
        <>
        <div className='small key text-muted'>{transactionKey}</div>
        <div className='val h4'>{transactionVal}</div>
        </>
        }
      </div>
    {transactionBtn && 
      <div className='ps-4'>
        <button className='btn btn-success px-4'>{transactionBtn}</button>
      </div>
    }
  </div>;
}

export default TransactionView;
