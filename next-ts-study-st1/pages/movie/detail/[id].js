import { PlainLayout } from 'components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import withApi from 'helper/withApi';
import { AboutApi } from 'lib/api';
import { withRouter } from 'react-router-dom';


const Detail = props => {
  const router = useRouter();
  const { image, summary, name, url } = props.data;

  return (
    <PlainLayout>
      <div onClick={()=>router.back()}>Move Movie List</div>
      
      <h1>Detail</h1>
      <a href={url} target="_blank">
        <h3>{name}</h3>
      </a>
      <img src={image.medium} alt="" width="200" height="250" />
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </PlainLayout>
  );
}

Detail.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return { data };
};


export default Detail;