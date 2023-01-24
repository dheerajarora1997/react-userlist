import {useState, useEffect} from 'react'
import CommonLayout from '../../components/common/layout/commonLayout';
import Select from 'react-select';
import {Card, Button, Table} from 'react-bootstrap';
import axios from 'axios';

const SelectUserFormData = () => {

  const [users, setUsers] = useState()
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState()

  useEffect(()=>{
    const getUsers = async () => {
      setLoading(true);
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setUsers(data)
      setLoading(false);
    }

   console.log("filter data", filterData)

    getUsers() 
  },[])
const options = users && users.map(user =>{
  return {label: user.title + `(${user.albumId})`, value: user.albumId}
})



console.log(userId)

// const [state, setState] = useState({
//   selectOptions : [],
//   id: "",
//   name: ''
// })

// const [selectOption, setSelectOption] = useState()



//   const getOptions = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     const data = res.data
//     console.log("data", data)
//     const options = data.map(d => ({
//       "value" : d.id,
//       "label" : d.name
//     }))

//     setState({selectOptions: options})

//   }

//   const handleChange = (e) =>{
//    setState({id:e.value, name:e.label})
//    console.log("state val", state)
//   }

//   useEffect(() => {
//       getOptions()
      
//   }, []);


  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([])
  // const [selectedOption, setSelectedOption] = useState([])
  // const [state, setState] = useState({
  //   id: "",
  //   name: ''
  // })

  // const fetchData = async () => {
  //   setLoading(true);
  //   await axios.get(`https://jsonplaceholder.typicode.com/photos`)
  //     .then(res => {
  //      setUsers(res.data);
  //     });
      
     

  //     setSelectedOption(options)

  //     setLoading(false);
  // }

  // const options = users.map(d => ({
  //   "value" : d.albumId,
  //   "label" : d.albumId
  // }))

  // const handleChange = (e) => {
  //   setState({id:e.value, name:e.label})
  //  }

  // useEffect(() => {
  //   fetchData()
  //   console.log("user", users)
  // }, []);

  // useEffect(() => {
  //   const keys = ["userAlbumId", "userTitle"]

  //   if (users?.length > 0 ) {
  //     const data = users.map((element) =>
  //       Object.assign({}, ...keys.map((key) => ({ [key]: element[key] })))
  //     )
  //     if (data) {
  //       const newData = data.map(function (obj) {
  //         // Assign new keys
  //         obj["value"] = obj["prd_id"]
  //         obj["label"] = obj["description"]
  //         // Delete old keys
  //         delete obj["_id"]
  //         delete obj["description"]
  //         // Return obj with new keys
  //         return obj
  //       })
  //       newData && setUsers(newData)
  //     }
  //   }
  // }, [users])

  

  // const [selectedOption, setSelectedOption] = useState(null);
  // const handleChange = (event) => {
    
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = users.filter(data =>  data.albumId.search(value) != -1);
  //   setSelectedOption(result)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // };

  
  // const [selectedOption, setSelectedOption] = useState(null);
  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value)
  // }
  
  // const unique = [...new Set(users.map(item => item.albumId))]; 
 
  return (
    <>    

{users && (
       <Select 
       placeholder='Select user...'
       value={options.label}
       options={options}
       onChange={(option) => setUserId(option.value) }
       />
     )}

{/* <Select options={state.selectOptions} onChange={handleChange} />
    <p>You have selected <strong>{state.name}</strong> whose id is <strong>{state.id}</strong></p>
   */}

      {/* <Select
        value={selectedOption}
        onChange={handleChange}
        options={selectedOption}
      /> */}
{/* <p>You have selected <strong>{state.name}</strong> whose id is <strong>{state.id}</strong></p> */}

      {/* <select value={selectedOption} onChange={handleChange}>
      {unique.map(user => 
        <option key={user} value={user}>{user}</option>
      )}
      </select> */}
{loading ?  <div>Loding....</div> : 
<Table bordered>
  <thead>
    <tr>
    <th>
        Album Id
      </th>
      <th>
        Id
      </th>
      <th>
       Title
      </th>
      
    </tr>
  </thead>
  <tbody>
    {users && users.map(user => 
    <tr key={user.id}>
      <th>
        {user.albumId}
      </th>
      <th>
        {user.id}
      </th>
      <td>
      {user.title}
      </td>
     
    </tr>
   )}
  </tbody>
</Table>
}
    </>
  );
}

export default SelectUserFormData;
