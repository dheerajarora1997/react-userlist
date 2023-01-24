import { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import axios from 'axios'
import CommonLayout from '../../components/common/layout/commonLayout';
import InfiniteScroll from "react-infinite-scroll-component";

function UserListComponent() {
  const [users, setUsers] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalData, setTotalData] = useState("")

  const firstView = 10
  const fetchAllUser = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        setTotalData(res.data)
      })
  }
  const fetchUser = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNo}&_limit=${firstView}`)
      .then(resp => {
        setTotalData(resp.data)
        if (pageNo > 1) {
          let arr = [...users, ...resp.data];
          setUsers(arr);
          setPageNo(pageNo + 1)
        }
        else {
          setUsers(resp.data);
          setPageNo(pageNo + 1)
        }
      });
  }

  const fetchMoreUser = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNo}&_limit=${firstView}`)
      .then(resp => {
        if (pageNo > 1) {
          let arr = [...users, ...resp.data];
          setUsers(arr);
          console.log("if", users)
          setPageNo(pageNo + 1)
        }
        else {
          setUsers(resp.data);
          console.log("else", users)
          setPageNo(pageNo + 1)
          console.log("page", pageNo)
        }
      });
  }
  useEffect(() => {
    fetchAllUser()
    fetchUser()
  }, []);

  return (
    <>
      <CommonLayout>
        <div className='py-4'>
          <div>Total Results: {users.length} of {totalData.length}</div>
          <InfiniteScroll
            dataLength={users.length}
            next={fetchMoreUser}
            hasMore={users.length != totalData.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Table bordered>
              <thead>
                <tr>
                  <th>
                    Id
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {users && users.map(user =>
                  <tr key={user.id}>
                    <th>
                      {user.id}
                    </th>
                    <td>
                      {user.title}
                    </td>
                    <td>
                      <img src={user.url} alt="" width={40} />
                    </td>
                    <td>
                      <img src={user.thumbnailUrl} alt="" width={20} />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </InfiniteScroll>
        </div>
      </CommonLayout>
    </>
  );
}

export default UserListComponent;
