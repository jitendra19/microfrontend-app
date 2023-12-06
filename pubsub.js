const PubSub = (function(){
    function PubSubClass() {
        return {
            events: {},
            subscribe: function (eventName, fn) {
                this.events[eventName] = this.events[eventName] || [];
                this.events[eventName].push(fn);
            },
            unsubscribe: function (eventName, fn) {
                if (this.events[eventName]) {
                    for (var i = 0; i < this.events[eventName].length; i++) {
                        if (this.events[eventName][i] === fn) {
                            this.events[eventName].splice(i, 1);
                            break;
                        }
                    };
                }
            },
            publish: function (eventName, data) {
                if (this.events[eventName]) {
                    this.events[eventName].forEach(function (fn) {
                        fn(data);
                    });
                }
            }
        }
    }
    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new PubSubClass();
                // Hide the constructor so the returned object can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

export const pubsub = PubSub.getInstance();

// export default function events() {
//     return {
//         events: {},
//         subscribe: function (eventName, fn) {
//             this.events[eventName] = this.events[eventName] || [];
//             this.events[eventName].push(fn);
//         },
//         unsubscribe: function (eventName, fn) {
//             if (this.events[eventName]) {
//                 for (var i = 0; i < this.events[eventName].length; i++) {
//                     if (this.events[eventName][i] === fn) {
//                         this.events[eventName].splice(i, 1);
//                         break;
//                     }
//                 };
//             }
//         },
//         publish: function (eventName, data) {
//             if (this.events[eventName]) {
//                 this.events[eventName].forEach(function (fn) {
//                     fn(data);
//                 });
//             }
//         }
//     }
// }