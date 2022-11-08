import React from "react";
import { useState, useEffect} from "react";



const Modal = () => {

  var cards = JSON.parse(localStorage.getItem("localCard")) ? JSON.parse(localStorage.getItem("localCard")) : [];


  const [cardsList, setCard] = useState(cards);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

  }, [cardsList])

  function editCard(cardId, title, description) {
    cardsList[cardId].title = title;
    cardsList[cardId].description = description;
    setCard([...cardsList])
    localStorage.setItem("localCard" , JSON.stringify([...cardsList]))
  }

  function EditCardModal(editprops) {
    const [editedTitle,setEditedtitle] = useState(editprops.title);
    const [editedDescription,setEditedDescription] = useState(editprops.description)
    return (
      <div>
        <div>
          <button type="button" className="btn btn-primary my-5 mx-4"   data-bs-toggle="modal" data-bs-target={"#card" + editprops.cardId}>
            Edit 
          </button>
        </div>
        <div
        className="modal fade"
        id= {"card" + editprops.cardId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={'modelLabel' + editprops.title}>
                Add Card
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Title:</label>
                <input type="text" className="form-control" id={"recipient-name" + editprops.title} value={editedTitle} onChange={(e) => setEditedtitle(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label for="message-text" className="col-form-label">Discription:</label>
                <textarea className="form-control" id={"message-text" + editprops.title} value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}></textarea>
              </div>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"                
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => editCard(editprops.cardId, editedTitle, editedDescription)}>
                Save 
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }

  function Card(props) {
    

    return <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{ props.title }</h5>
                  <p className="card-text">
                    {props.description}
                  </p>
                </div>
                <div>
                  <EditCardModal title={ props.title} description={props.description} cardId={props.cardId}/>
                </div>
              </div>
            </div>;
}
  
  const addCard = function() {
    
    const card = {
      title,
      description
    };
    
    const storedCard = JSON.parse(localStorage.getItem("localCard"))
    
    if (storedCard) {
      setCard([...storedCard, card])
      localStorage.setItem("localCard" , JSON.stringify([...cardsList, card]))
    } else {
      setCard([card])
      localStorage.setItem("localCard" , JSON.stringify([...cardsList, card]))
      console.log(cardsList)
    }

  }

  return (

    <div>
      {/* Card */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Card
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Title:</label>
                <input type="text" className="form-control" id="recipient-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label for="message-text" className="col-form-label">Discription:</label>
                <textarea className="form-control" id="message-text" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addCard}>
                Save 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* home */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardsList.map((data, index) => <Card title={data.title} description={data.description} cardId = {index}/>)}
        <div className="col">
        </div>
      </div>
      
    </div>
  );


};

export default Modal;
