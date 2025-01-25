import { Observer } from "./example1/observer.ts";
import { Subject } from "./example1/subject.ts";
import { Investory, Notifier, UIUpdater } from "./example2/observers.ts";
import { PriceMonitor } from "./example2/subject.ts";

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

// Example 2 - Price Monitor

// subject (observable)
const priceMonitor = new PriceMonitor();

// observers
const notifier = new Notifier();
const uiupdater = new UIUpdater();
const inventory = new Investory();

priceMonitor.attach(uiupdater);
priceMonitor.attach(inventory);
priceMonitor.attach(notifier);

// Simulate price updates
priceMonitor.notify({ price: 90.99, productId: "ERDXX4", lastUpdated: Date.now(), currency: "$" });
// Some time later...
priceMonitor.notify({ price: 70.99, productId: "ERDXX4", lastUpdated: Date.now(), currency: "$" });

// UI update: Price updated to 90.99$ for ERDXX4
// Inventory System: Updating price records for product ERDXX4
// UI update: Price updated to 70.99$ for ERDXX4
// Inventory System: Updating price records for product ERDXX4
// Users notified of price change for ERDXX4 | Discount - 21%
