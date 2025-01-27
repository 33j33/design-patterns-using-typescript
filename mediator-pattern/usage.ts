import { ChatRoom } from "./chatRoom.ts";
import { ChatRoomUser } from "./chatRoomUser.ts";
import { Mediator } from "./mediator.ts";

const mediator = new Mediator();

const learnPythonGroup = new ChatRoom("learnPython", mediator);

const john = new ChatRoomUser("john", mediator);
const jane = new ChatRoomUser("jane", mediator);
const janice = new ChatRoomUser("janice", mediator);

john.join(learnPythonGroup.name);
jane.join(learnPythonGroup.name);
janice.join(learnPythonGroup.name);

janice.sendMessage(learnPythonGroup.name, "Hi! everyone. What's the best place to learn python?");
john.sendMessage(learnPythonGroup.name, "You can start with: Automate the boring stuff with Python");

/**
 *
learnPython | room-created
learnPython | user-joined | john
learnPython | user-joined | jane
learnPython | user-joined | janice
learnPython | message-sent | by janice
        notification to john: msg from janice in learnPython
         Hi! everyone. What's the best place to learn python?...
        notification to jane: msg from janice in learnPython
         Hi! everyone. What's the best place to learn python?...
learnPython | message-sent | by john
        notification to jane: msg from john in learnPython
         You can start with: Automate the boring stuff with Python...
        notification to janice: msg from john in learnPython
         You can start with: Automate the boring stuff with Python...
*/

janice.exit(learnPythonGroup.name);

const learnTS = new ChatRoom("learnTS", mediator);
const emily = new ChatRoomUser("emily", mediator);

janice.join(learnTS.name);
emily.join(learnTS.name);

emily.sendMessage(learnTS.name, "helloooo woooorld");

/**
learnPython | user-left | janice
learnTS | room-created
learnTS | user-joined | janice
learnTS | user-joined | emily
learnTS | message-sent | by emily
        notification to janice: msg from emily in learnTS
         helloooo woooorld...
*/
