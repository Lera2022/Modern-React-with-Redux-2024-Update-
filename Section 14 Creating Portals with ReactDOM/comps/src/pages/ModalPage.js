import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  //   const modal = <Modal onClose={handleClose} actionBar={<Button primary>I Accept</Button>}>
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    // <div className="relative">
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {/* {showModal && <Modal onClose={handleClose} />} */}
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        justo nunc, nec aliquet turpis auctor ut. Nulla facilisi. Vestibulum
        sollicitudin aliquam fermentum. Quisque suscipit quam ut massa dictum
        tristique. Cras ex risus, egestas at commodo sed, fermentum eu erat.
        Maecenas enim lorem, mollis vitae malesuada non, laoreet porttitor
        massa. Nunc tellus risus, lacinia vitae felis pretium, aliquam sodales
        mi. Phasellus consequat, ex id vestibulum lobortis, ipsum dolor
        pellentesque velit, sit amet ornare tortor dolor accumsan mauris.
      </p>
      {/* <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal} */}
    </div>
  );
}

export default ModalPage;
