import PlainLayout from 'components/Layout/PlainLayout';
import withApi from 'helper/withApi';
import { AboutApi } from 'lib/api';

const About = props => {
console.log(props);
  return (
    <PlainLayout>
      <h1>About</h1>
      <div>
        {props.data && props.data.title}
      </div>
    </PlainLayout>
  )
}

export default withApi(About, AboutApi);
