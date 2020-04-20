import {useEffect} from 'react';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getTodo } from "store/actions/usersActions";
import { PlainTemplate } from 'components/base/template';
import {BASE_TEST_SAGAS} from 'store/actions';


const User = ({ user }) => (
  <li>
    <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

const HomePage = props => {
  const dispatch = useDispatch();
  const { usersReducer } = useSelector(
    ({ usersReducer }) => ({ usersReducer })
  );
  const users = usersReducer.users;

  const hanldeClick = config => {
    const {type} = config;
    
    if(type === 'todo'){
      dispatch(getTodo())
    }
    if(type === 'saga'){
      // dispatch({type:"base/BASE_TEST_INDEX"})
      // BASE_TEST_SAGAS();
    }
    
  }

  useEffect(()=>{
    
  },[]);

  return (
    <PlainTemplate>
      <h1>Users</h1>
      <ul>{users && users.map(user => <User key={user.id} user={user} />)}</ul>
      <button onClick={()=>hanldeClick({type:"todo"})}>GET TODO</button>
      <button onClick={()=>hanldeClick({type:"saga"})}>GET SAGAS</button>
      <h2>{usersReducer.todo.title}</h2>
    </PlainTemplate>
  );
};


// HomePage.getInitialProps = async ctx => {
//   // await ctx.store.dispatch(getUsers());
//   // ctx.store.dispatch({type:"SAGA_TESTS"})
// };
export default HomePage;
