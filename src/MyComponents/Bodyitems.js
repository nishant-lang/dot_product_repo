import React from "react";


function Card(props) {
  return <div className="col">
            <div className="card" style={{width:"18rem"}}>
              <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">
                  {props.description}
                </p>
              </div>
            </div>
          </div>;
}

const Bodyitems = () => {

  const cards = [
    {title : "Hello World", description : "first Card"}, 
    {title : "Hello World", description : "second Card"}, 
    {title : "Hello World", description : "third Card"}, 
  ];
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards.map((data) => <Card title={data.title} description={data.description} />)}
        <div className="col">
        </div>
      </div>
    </div>
  );
};

export default Bodyitems;
