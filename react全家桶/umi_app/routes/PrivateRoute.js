import Redirect from 'umi/redirect';
export default function (props) {
  if (Math.random() > 0.5) {
    return <Redirect to='/login' />
  } else {
    return (
      <div>
        {props.children}
      </div>
    );
  }
}
