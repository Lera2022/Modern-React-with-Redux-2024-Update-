// function ProfileCard(props) {
  function ProfileCard({title, handle, image, description}) {
  // const title = props.title;
  // const handle = props.handle;
  // const {title, handle} = props;
  console.log(title, handle);
  
  return (
    <div className="card">
      {/* <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>       */}
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
        {/* <p className="title is-4">Title is {title}</p>
        <p className="subtitle is-6">Handle is {handle}</p>           */}
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
