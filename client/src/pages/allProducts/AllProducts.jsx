import './allProduct.css';
import CardData from "../../Sdata/CardData";
import Card1 from "../../components/cards/Card1";


export default function AllProducts() {
  return (
    <div className='all-product-list-wrapper'>
    <p className='all-product-list-wrapper-heading'>Here the list of all products</p>
     <div className="all-product-list">
      {CardData.map((card) => (
        <Card1 cardDetail={card} />
      ))}
      </div>
      <p style={{textAlign:'center'}}> End of page!</p>
      </div>

  );
}
