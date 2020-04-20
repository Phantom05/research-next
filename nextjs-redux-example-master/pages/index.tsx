import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getTodo } from "../store/actions/usersActions";
import { PlainTemplate } from 'components/base/template';


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

  const hanldeClick = () => {
    dispatch(getTodo())
  }

  return (
    <PlainTemplate>
      <h1>Users</h1>
      <ul>{users && users.map(user => <User key={user.id} user={user} />)}</ul>
      <button onClick={hanldeClick}>GET TODO</button>
      <h2>{usersReducer.todo.title}</h2>
    </PlainTemplate>
  );
};


HomePage.getInitialProps = async ctx => {
  await ctx.store.dispatch(getUsers());
  // return { };
};
export default HomePage;
