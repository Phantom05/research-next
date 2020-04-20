import PlainLayout from 'components/Layout/PlainLayout';
import withApi from 'helper/withApi';
import {AboutApi} from 'lib/api';

const About = props =>{
  
  return (
    <PlainLayout>
      <p>Hello About</p>
      <div>
        {props.data.title}
      </div>
    </PlainLayout>
  )
}

export default withApi(About,AboutApi);
