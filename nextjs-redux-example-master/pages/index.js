import Link from "next/link";
import { connect } from "react-redux";
import Layout from "../components/MyLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getTodo } from "../store/actions/usersActions";


const User = ({ user }) => (
  <li>
    <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

const Index = props => {
  const dispatch = useDispatch();
  const { usersReducer } = useSelector(
    ({ usersReducer }) => ({ usersReducer})
  );
  const users = usersReducer.users;

  const hanldeClick = config =>{
    dispatch(getTodo())
  }

  return (
    <Layout>
      <h1>Users</h1>
      <ul>{users && users.map(user => <User key={user.id} user={user} />)}</ul>
      <button onClick={hanldeClick}>GET TODO</button>
      <h2>{usersReducer.todo.title}</h2>
    </Layout>
  );
};


Index.getInitialProps = async ctx => {
  await ctx.store.dispatch(getUsers());
  return { };
};
export default Index;
