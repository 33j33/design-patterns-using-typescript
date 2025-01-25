import { Observer } from "./example1/observer.ts";
import { Subject } from "./example1/subject.ts";

// Example 1

type Video = {
  title: string;
  duration: number;
};

const ytchannel = new Subject<Video>("3Blue1Brown");

const john = new Observer<Video>("John");
const jane = new Observer<Video>("Jane");

ytchannel.attach(john); // john subscribes channel
ytchannel.attach(jane); // jane subscrine channel

ytchannel.notify({ title: "EigenVectors", duration: 40 });
// data received to observer: John | {"title":"EigenVectors","duration":40}
// data received to observer: Jane | {"title":"EigenVectors","duration":40}

ytchannel.detach(john); // john unsubcribes

ytchannel.notify({ title: "Essence of Linear Algebra", duration: 24 });
// data received to observer: Jane | {"title":"Essence of Linear Algebra","duration":24}
