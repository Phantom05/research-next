import { useRouter } from 'next/router';
import { PlainLayout } from 'components/Layout';


const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = ()=>{
  return (
    <PlainLayout>
      <Content/>
    </PlainLayout>
  )
}

export default Page;