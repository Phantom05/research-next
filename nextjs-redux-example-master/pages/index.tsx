import Link from "next/link";
import { useApi } from "libs/utils";
import { useSelector } from "react-redux";
import { PlainTemplate } from "components/base/template";

const User = ({ user }) => (
  <li>
    <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

function HomePage() {
  const { getTodo,SAGA_TEST } = useApi();
  const { usersReducer } = useSelector(({ usersReducer }) => ({
    usersReducer,
  }));
  const users = usersReducer.users;

  const hanldeClick = (config) => {
    const { type } = config;
    const seqIsTypeTodo = type === "todo";
    const seqIsTypeSaga = type === 'saga';

    if (seqIsTypeTodo) {
      getTodo();
    }
    if (seqIsTypeSaga) {
      console.log('saga');
      SAGA_TEST()
    }
  };

  return (
    <PlainTemplate>
      {[1,2,3].map((item,idx)=><div key={idx}>{item}</div>)}
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </ul>
      <button onClick={() => hanldeClick({ type: "todo" })}>GET TODO</button>
      <button onClick={() => hanldeClick({ type: "saga" })}>GET SAGAS</button>
      <h2>{usersReducer.todo && usersReducer.todo.title}</h2>
    </PlainTemplate>
  );
}
//

HomePage.getInitialProps = async (ctx) => {
  const { getUsers } = useApi({ type: "init", dispatch: ctx.store.dispatch });
  await getUsers();
};
export default HomePage;
