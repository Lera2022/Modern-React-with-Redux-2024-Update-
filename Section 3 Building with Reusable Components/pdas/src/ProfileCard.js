// function ProfileCard(props) {
  function ProfileCard({title, handle}) {
  // const title = props.title;
  // const handle = props.handle;

  // const {title, handle} = props;
  
  return (
    <div>
      {/* <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>       */}
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}
export default ProfileCard;
