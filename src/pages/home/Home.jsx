import {useState, useEffect} from 'react'
import CommonLayout from '../../components/common/layout/commonLayout';
import SelectUserForm from '../selectUserData';

function Home() {

  return (
    <>    
    <CommonLayout>
      Welcome to Home

      <SelectUserForm />
    </CommonLayout>
    </>
  );
}

export default Home;
