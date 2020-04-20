import {PlainHeader} from 'components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <PlainHeader />
      <Page />
    </div>
  );
};

export default withLayout;