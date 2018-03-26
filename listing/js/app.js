'use strict';
const address = 'https://neto-api.herokuapp.com/etsy';
fetch(address)
    .then(res => res.json())
    .then( list => renderItems(list));

function renderItems(list) {
    function Listing(list) {
        const currency = {
            USD: '$',
            EUR: '€'
        };

        const listItems = list.items.map(item => {
            let price = currency[item.currency_code] ? currency[item.currency_code] + item.price : item.price + ' ' + item.currency_code;
            let title = item.title ? (item.title.length <= 50 ? item.title : item.title.slice(0, 51)+'...') : null;
            function Quantity(props){
               const classAmount = props.amount <= 10 ? 'item-quantity level-low' : (
                   props.amount <= 20 ? 'item-quantity level-medium' : 'item-quantity level-high'
               );
                return <p className={classAmount}>{props.amount} left</p>;
            }
            return  <div className="item" key={item.listing_id}>
                    <div  className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage ? item.MainImage.url_570xN : null} alt=""/>
                        </a>
                    </div>
                <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}</p>
                    <Quantity amount = {item.quantity} />
                </div>
            </div>;
        });
        return <div className="item-list">{listItems}</div>;
    }
    ReactDOM.render(
        <Listing  items = {list}/>,
        document.getElementById('root')
    );
}
