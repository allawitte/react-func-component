'use strict';

function Stars(props) {
   const starsArr = [];
    for (let i = 0; i < props.count; i ++){
        starsArr.push(<li key={i}><Star /></li>)
    }
    return (props.count<1 || props.count>5) ? null :<ul className="card-body-stars u-clearfix">{starsArr}</ul>
}
