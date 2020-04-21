var messages=[];

var messageType={
    out:'out-message',
    in:'in-message',
    unknown:'unknown-message',

};

var data=[
    {
        type:messageType.out,
        user:'Mike',
        message:'Hey you have lunch plans?',

    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'No how about Qdoba?',
    },
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Okay, lets go',
    }

];
function Message(type,user,message){
    this.user=user;
    this.type=type;
    this.message=message;
}
function createMessageElement(message){
    var messageText=document.createTextNode(
        message.user +': '+message.message
    );
    var messageEl=document.createElement('div');
    messageEl.appendChild(messageText);
    messageEl.className=message.type;
    return messageEl;
}

function addMessageHandler(event){
    var user, type;
    var messageInput=document.getElementById('message-input');
    var messageContainerEl=document.getElementById('message-container');

    switch(event.target.id){
        case 'send-button':
        user='Mike';
        type=messageType.out;
        break;
        case 'reply-button':
            user='Joe';
            type.messageType.in;
            break;
        default:
            user='unknown';
            type.messageType.unknown;
     
    }
    if(messageInput!=''){
        var message=new Message(type,user,messageInput.value);
        messages.push(message);
        var el=createMessageElement(message);
        messagesContainerEl.appendChild(el);
        messageInput.value='';
}
};
var init=function(){
    document.getElementById('send-buttton').onclick=addMessageHandler;
    document.getElementById('send-buttton').onclick = addMessageHandler;
};
init();
