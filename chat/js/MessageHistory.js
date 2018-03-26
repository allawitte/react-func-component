'use strict';
function MessageHistory(props){
   const types = {
       message:  'Message',
       response: 'Response',
       typing: 'Typing'
   };
    const elements = props.list.map(item => {
        switch(item.type){
            case 'message':
                return <Message key={item.id} from={item.from} message={{text: item.text, time: item.time}}/>;
            break;
            case 'response':
                return <Response key={item.id} from={item.from} message={{text: item.text, time: item.time}}/>;
            break;
            case 'typing':
                return <Typing key={item.id} from={item.from} message={{text: item.text, time: item.time}}/>;
                break;
            default:
                return null;
        }
    });
    return <ul>{elements}</ul>;
}
